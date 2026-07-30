#!/usr/bin/env node

const fs = require('fs/promises');
const path = require('path');
const { setTimeout: sleep } = require('timers/promises');

const BASE_URL = 'https://rmxhelp.rentmanager.com/';
const DEFAULT_OUT = path.join(process.cwd(), 'rentmanager-help-archive');

function parseArgs(argv) {
  const args = {
    out: DEFAULT_OUT,
    limit: 0,
    delayMs: 1000,
    force: false,
    sitemapOnly: false,
    includeMicroContent: false,
    rawHtml: false,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--out') args.out = path.resolve(argv[++i]);
    else if (arg === '--limit') args.limit = Number(argv[++i]);
    else if (arg === '--delay-ms') args.delayMs = Number(argv[++i]);
    else if (arg === '--force' || arg === '--permission-confirmed') args.force = true;
    else if (arg === '--sitemap-only') args.sitemapOnly = true;
    else if (arg === '--include-microcontent') args.includeMicroContent = true;
    else if (arg === '--raw-html') args.rawHtml = true;
    else if (arg === '--help' || arg === '-h') {
      printHelp();
      process.exit(0);
    } else {
      throw new Error(`Unknown argument: ${arg}`);
    }
  }

  if (!Number.isFinite(args.limit) || args.limit < 0) {
    throw new Error('--limit must be a non-negative number');
  }
  if (!Number.isFinite(args.delayMs) || args.delayMs < 0) {
    throw new Error('--delay-ms must be a non-negative number');
  }
  return args;
}

function printHelp() {
  console.log(`Usage: node scripts/rmx_help_pull.js [options]

Pull Rent Manager Help topic pages from the generated MadCap sitemap.

Options:
  --out DIR                 Output directory (default: ./rentmanager-help-archive)
  --limit N                 Stop after N topic pages, useful for testing
  --delay-ms N              Delay between page fetches (default: 1000)
  --sitemap-only            Save only URL inventory files, no article fetches
  --include-microcontent    Include MicroContent URLs in addition to Topics URLs
  --raw-html                Save raw HTML beside extracted Markdown
  --permission-confirmed    Proceed even though robots.txt disallows crawling
  --force                   Alias for --permission-confirmed
`);
}

async function fetchText(url) {
  const res = await fetch(url, {
    headers: {
      'user-agent': 'OpenClaw RMX help archiver (+local operator controlled)',
      accept: 'text/html,application/xhtml+xml,application/xml,text/xml,text/plain,*/*',
    },
  });
  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText} for ${url}`);
  }
  return res.text();
}

function robotsDisallowsAll(robotsText) {
  let applies = false;
  for (const rawLine of robotsText.split(/\r?\n/)) {
    const line = rawLine.replace(/#.*/, '').trim();
    if (!line) continue;
    const [rawKey, ...rest] = line.split(':');
    const key = rawKey.trim().toLowerCase();
    const value = rest.join(':').trim();
    if (key === 'user-agent') {
      applies = value === '*';
    } else if (applies && key === 'disallow' && value === '/') {
      return true;
    }
  }
  return false;
}

function extractUrlsFromSitemap(xml, includeMicroContent) {
  const urls = [];
  const locRe = /<loc>([^<]+)<\/loc>/g;
  let match;
  while ((match = locRe.exec(xml)) !== null) {
    const url = match[1].trim();
    if (!url.endsWith('.htm')) continue;
    if (url.endsWith('/Default.htm')) continue;
    if (!includeMicroContent && url.includes('/MicroContent/')) continue;
    if (!url.includes('/Topics/')) continue;
    urls.push(url);
  }
  return [...new Set(urls)].sort();
}

function extractAllSitemapEntries(xml) {
  const urls = [];
  const locRe = /<loc>([^<]+)<\/loc>/g;
  let match;
  while ((match = locRe.exec(xml)) !== null) {
    const url = match[1].trim();
    const pathname = new URL(url).pathname;
    let type = 'other';
    if (pathname.endsWith('/Default.htm') || pathname.endsWith('/Default.mcwebhelp')) type = 'default';
    else if (pathname.includes('/MicroContent/')) type = 'microcontent';
    else if (pathname.includes('/Topics/') && pathname.endsWith('.htm')) type = 'article';
    else if (pathname.endsWith('.htm')) type = 'html';
    urls.push({ url, path: pathname, type });
  }
  return urls;
}

function csvEscape(value) {
  const text = String(value ?? '');
  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

async function writeSitemapInventory(outRoot, sitemap, manifest) {
  const entries = extractAllSitemapEntries(sitemap);
  const sitemapDir = path.join(outRoot, 'sitemap');
  const stateDir = path.join(outRoot, 'state');
  await fs.mkdir(sitemapDir, { recursive: true });
  await fs.mkdir(stateDir, { recursive: true });

  const counts = entries.reduce((acc, entry) => {
    acc[entry.type] = (acc[entry.type] || 0) + 1;
    return acc;
  }, {});

  await fs.writeFile(path.join(stateDir, 'source-sitemap.xml'), sitemap);
  await fs.writeFile(path.join(sitemapDir, 'all-urls.json'), `${JSON.stringify(entries, null, 2)}\n`);
  await fs.writeFile(
    path.join(sitemapDir, 'articles.json'),
    `${JSON.stringify(entries.filter((entry) => entry.type === 'article'), null, 2)}\n`,
  );
  await fs.writeFile(
    path.join(sitemapDir, 'all-urls.csv'),
    `type,path,url\n${entries.map((entry) => [entry.type, entry.path, entry.url].map(csvEscape).join(',')).join('\n')}\n`,
  );
  await fs.writeFile(
    path.join(sitemapDir, 'articles.md'),
    [
      '# Rent Manager Help Article Sitemap',
      '',
      `Generated: ${manifest.generatedAt}`,
      `Source: ${manifest.source}`,
      `Sitemap: ${manifest.sitemapUrl}`,
      '',
      `Article URLs: ${counts.article || 0}`,
      `MicroContent URLs: ${counts.microcontent || 0}`,
      `Other URLs: ${entries.length - (counts.article || 0) - (counts.microcontent || 0)}`,
      '',
      ...entries
        .filter((entry) => entry.type === 'article')
        .map((entry) => `- [${entry.path.replace(/^\/Topics\/Express\//, '')}](${entry.url})`),
      '',
    ].join('\n'),
  );

  return { entries, counts };
}

function decodeHtml(value) {
  return value
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)));
}

function stripTagBlocks(html, tag) {
  return html.replace(new RegExp(`<${tag}\\b[\\s\\S]*?<\\/${tag}>`, 'gi'), '');
}

function findElementHtml(html, tagName, attrPattern) {
  const openTagRe = new RegExp(`<${tagName}\\b[^>]*${attrPattern}[^>]*>`, 'i');
  const openMatch = openTagRe.exec(html);
  if (!openMatch) return null;

  let depth = 1;
  let cursor = openMatch.index + openMatch[0].length;
  const tagRe = new RegExp(`<\\/?${tagName}\\b[^>]*>`, 'gi');
  tagRe.lastIndex = cursor;

  while (true) {
    const match = tagRe.exec(html);
    if (!match) return html.slice(cursor);
    if (match[0].startsWith('</')) {
      depth -= 1;
      if (depth === 0) return html.slice(cursor, match.index);
    } else if (!match[0].endsWith('/>')) {
      depth += 1;
    }
  }
}

function extractMainHtml(html) {
  const body = html.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i)?.[1] || html;
  const madcapMain =
    findElementHtml(body, 'div', `(?:role=["']main["'][^>]*id=["']mc-main-content["']|id=["']mc-main-content["'][^>]*role=["']main["'])`) ||
    findElementHtml(body, 'main', '');
  const content =
    madcapMain ||
    body.match(/<article\b[^>]*>([\s\S]*?)<\/article>/i)?.[1] ||
    body.match(/<div\b[^>]*class="[^"]*\btopic-content\b[^"]*"[^>]*>([\s\S]*?)<\/div>/i)?.[1] ||
    body;
  return ['script', 'style', 'nav', 'aside', 'header', 'footer', 'form'].reduce(stripTagBlocks, content);
}

function htmlToText(html) {
  return decodeHtml(
    html
      .replace(/\r/g, '')
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<\/(p|div|section|article|h[1-6]|li|tr)>/gi, '\n')
      .replace(/<li\b[^>]*>/gi, '- ')
      .replace(/<[^>]+>/g, ' ')
      .replace(/[ \t]+\n/g, '\n')
      .replace(/\n{3,}/g, '\n\n')
      .replace(/[ \t]{2,}/g, ' ')
      .trim(),
  );
}

function extractTitle(html, fallbackUrl) {
  const h1 = html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1];
  const title = h1 || html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1];
  if (title) return htmlToText(title).replace(/\s+/g, ' ').trim();
  return path.basename(new URL(fallbackUrl).pathname, '.htm').replace(/-/g, ' ');
}

function outputPathForUrl(outRoot, url, ext) {
  const pathname = new URL(url).pathname.replace(/^\/+/, '');
  return path.join(outRoot, pathname.replace(/\.htm$/i, ext));
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  await fs.mkdir(args.out, { recursive: true });

  const robotsUrl = new URL('robots.txt', BASE_URL).href;
  const robots = await fetchText(robotsUrl);
  const disallowed = robotsDisallowsAll(robots);
  if (disallowed && !args.force) {
    console.error(`Refusing to crawl: ${robotsUrl} contains "User-agent: *" and "Disallow: /".`);
    console.error('The technical workaround is ready, but run with --force only if you have permission to archive this site.');
    process.exit(2);
  }

  const sitemapUrl = new URL('Sitemap.xml', BASE_URL).href;
  const sitemap = await fetchText(sitemapUrl);
  const urls = extractUrlsFromSitemap(sitemap, args.includeMicroContent);
  const selected = args.limit > 0 ? urls.slice(0, args.limit) : urls;

  const manifest = {
    source: BASE_URL,
    sitemapUrl,
    robotsUrl,
    robotsDisallowAll: disallowed,
    discoveredTopicUrls: urls.length,
    selectedTopicUrls: selected.length,
    generatedAt: new Date().toISOString(),
    urls: selected,
  };
  await fs.mkdir(path.join(args.out, 'state'), { recursive: true });
  await fs.writeFile(path.join(args.out, 'state', 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`);
  const inventory = await writeSitemapInventory(args.out, sitemap, manifest);

  if (args.sitemapOnly) {
    console.log(
      `Done. Inventoried ${inventory.entries.length} sitemap URLs: ` +
        `${inventory.counts.article || 0} articles, ${inventory.counts.microcontent || 0} microcontent URLs.`,
    );
    return;
  }

  let saved = 0;
  for (const url of selected) {
    const html = await fetchText(url);
    const mainHtml = extractMainHtml(html);
    const title = extractTitle(html, url);
    const mainWithoutTitle = mainHtml.replace(/^\s*<h1\b[^>]*>[\s\S]*?<\/h1>/i, '');
    const text = htmlToText(mainWithoutTitle);
    const markdown = `# ${title}\n\nSource: ${url}\n\n${text}\n`;
    const mdPath = outputPathForUrl(args.out, url, '.md');
    await fs.mkdir(path.dirname(mdPath), { recursive: true });
    await fs.writeFile(mdPath, markdown);
    if (args.rawHtml) {
      await fs.writeFile(outputPathForUrl(args.out, url, '.html'), html);
    }
    saved += 1;
    console.log(`saved ${saved}/${selected.length}: ${url}`);
    if (args.delayMs > 0 && saved < selected.length) {
      await sleep(args.delayMs);
    }
  }

  console.log(`Done. Discovered ${urls.length} topic URLs; saved ${saved} articles under ${args.out}`);
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exit(1);
});
