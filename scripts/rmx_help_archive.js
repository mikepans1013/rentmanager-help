#!/usr/bin/env node

const crypto = require('crypto');
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
    mirrorHtml: false,
    rawHtml: false,
    incremental: true,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--out') args.out = path.resolve(argv[++i]);
    else if (arg === '--limit') args.limit = Number(argv[++i]);
    else if (arg === '--delay-ms') args.delayMs = Number(argv[++i]);
    else if (arg === '--force' || arg === '--permission-confirmed') args.force = true;
    else if (arg === '--sitemap-only') args.sitemapOnly = true;
    else if (arg === '--include-microcontent') args.includeMicroContent = true;
    else if (arg === '--mirror-html') args.mirrorHtml = true;
    else if (arg === '--raw-html') args.rawHtml = true;
    else if (arg === '--incremental') args.incremental = true;
    else if (arg === '--full-refresh' || arg === '--no-incremental') args.incremental = false;
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
  --mirror-html             Save portable article HTML and local image assets
  --raw-html                Save raw HTML beside extracted Markdown
  --incremental             Skip unchanged known pages using HTTP validators (default)
  --full-refresh            Fetch every selected page and rebuild the article index
  --permission-confirmed    Proceed even though robots.txt disallows crawling
  --force                   Alias for --permission-confirmed
`);
}

function sha256(value) {
  return crypto.createHash('sha256').update(value).digest('hex');
}

async function fileExists(file) {
  try {
    await fs.access(file);
    return true;
  } catch {
    return false;
  }
}

async function readTextIfExists(file) {
  try {
    return await fs.readFile(file, 'utf8');
  } catch (error) {
    if (error.code === 'ENOENT') return null;
    throw error;
  }
}

async function readJsonIfExists(file, fallback) {
  try {
    return JSON.parse(await fs.readFile(file, 'utf8'));
  } catch (error) {
    if (error.code === 'ENOENT') return fallback;
    throw error;
  }
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

async function fetchPageMetadata(url) {
  const res = await fetch(url, {
    method: 'HEAD',
    headers: {
      'user-agent': 'OpenClaw RMX help archiver (+local operator controlled)',
      accept: 'text/html,application/xhtml+xml,application/xml,text/xml,text/plain,*/*',
    },
  });
  if (!res.ok) return null;
  return {
    etag: res.headers.get('etag') || null,
    lastModified: res.headers.get('last-modified') || null,
    contentLength: res.headers.get('content-length') || null,
    contentType: res.headers.get('content-type') || null,
  };
}

function validatorsMatch(previous, current) {
  if (!previous || !current) return false;
  const validators = previous.validators || [previous];
  for (const validator of validators) {
    if (validator.etag && current.etag && validator.etag === current.etag) return true;
    if (validator.lastModified && current.lastModified && validator.contentLength && current.contentLength) {
      if (validator.lastModified === current.lastModified && validator.contentLength === current.contentLength) return true;
    }
  }
  return false;
}

function validatorKey(value) {
  return [value?.etag || '', value?.lastModified || '', value?.contentLength || ''].join('\t');
}

function mergeValidators(previous, current) {
  const validators = [];
  const seen = new Set();
  for (const validator of [...(previous?.validators || []), previous, current]) {
    if (!validator) continue;
    const entry = {
      etag: validator.etag || null,
      lastModified: validator.lastModified || null,
      contentLength: validator.contentLength || null,
      contentType: validator.contentType || null,
    };
    const key = validatorKey(entry);
    if (key.trim() && !seen.has(key)) {
      seen.add(key);
      validators.push(entry);
    }
  }
  return validators.slice(-5);
}

async function fetchBytes(url) {
  const res = await fetch(url, {
    headers: {
      'user-agent': 'OpenClaw RMX help archiver (+local operator controlled)',
      accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
    },
  });
  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText} for ${url}`);
  }
  return {
    bytes: Buffer.from(await res.arrayBuffer()),
    contentType: res.headers.get('content-type') || '',
  };
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
    if (url.includes('/MicroContent/')) {
      if (includeMicroContent) urls.push(url);
      continue;
    }
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

function rawOutputPathForUrl(outRoot, url) {
  const pathname = new URL(url).pathname.replace(/^\/+/, '');
  return path.join(outRoot, 'raw', pathname);
}

function articlePathSet(outRoot, url, args) {
  return {
    markdown: outputPathForUrl(outRoot, url, '.md'),
    portableHtml: args.mirrorHtml ? localArticleOutputPath(outRoot, url) : null,
    rawHtml: args.rawHtml ? rawOutputPathForUrl(outRoot, url) : null,
  };
}

async function articleExists(paths) {
  const checks = [paths.markdown, paths.portableHtml, paths.rawHtml].filter(Boolean);
  for (const file of checks) {
    if (await fileExists(file)) return true;
  }
  return false;
}

function isSkippableUrl(value) {
  return (
    !value ||
    value.startsWith('#') ||
    value.startsWith('mailto:') ||
    value.startsWith('tel:') ||
    value.startsWith('javascript:') ||
    value.startsWith('data:')
  );
}

function isLocalUrl(url) {
  return url.origin === new URL(BASE_URL).origin;
}

function isImageUrl(url) {
  return /\.(?:jpe?g|png|gif|svg|webp|bmp|ico)(?:$|[?#])/i.test(url.pathname);
}

function localArticleOutputPath(outRoot, url) {
  const pathname = new URL(url).pathname.replace(/^\/+/, '');
  return path.join(outRoot, pathname.replace(/\.htm$/i, '.html'));
}

function localAssetOutputPath(outRoot, url) {
  const pathname = new URL(url).pathname.replace(/^\/+/, '');
  return path.join(outRoot, 'assets', pathname);
}

function relativePath(fromFile, toFile) {
  return path.relative(path.dirname(fromFile), toFile).replace(/\\/g, '/') || path.basename(toFile);
}

function resolveUrl(value, pageUrl) {
  if (isSkippableUrl(value)) return null;
  try {
    return new URL(decodeHtml(value), pageUrl);
  } catch {
    return null;
  }
}

function splitSrcset(value) {
  return value
    .split(',')
    .map((part) => part.trim())
    .filter(Boolean)
    .map((part) => {
      const pieces = part.split(/\s+/);
      return { url: pieces.shift(), descriptor: pieces.join(' ') };
    });
}

function collectImageUrls(html, pageUrl) {
  const urls = new Map();
  for (const attr of ['src', 'href', 'data-src', 'data-mc-thumbnail']) {
    const re = new RegExp(`\\b${attr}=(["'])(.*?)\\1`, 'gi');
    let match;
    while ((match = re.exec(html)) !== null) {
      const url = resolveUrl(match[2], pageUrl);
      if (url && isLocalUrl(url) && isImageUrl(url)) urls.set(url.href, url);
    }
  }

  const srcsetRe = /\bsrcset=(["'])(.*?)\1/gi;
  let match;
  while ((match = srcsetRe.exec(html)) !== null) {
    for (const item of splitSrcset(match[2])) {
      const url = resolveUrl(item.url, pageUrl);
      if (url && isLocalUrl(url) && isImageUrl(url)) urls.set(url.href, url);
    }
  }
  return [...urls.values()];
}

async function mirrorImageAssets(html, pageUrl, outRoot) {
  const results = new Map();
  for (const url of collectImageUrls(html, pageUrl)) {
    const assetPath = localAssetOutputPath(outRoot, url);
    await fs.mkdir(path.dirname(assetPath), { recursive: true });
    try {
      const { bytes, contentType } = await fetchBytes(url.href);
      await fs.writeFile(assetPath, bytes);
      results.set(url.href, { ok: true, path: assetPath, contentType, bytes: bytes.length });
    } catch (error) {
      results.set(url.href, { ok: false, error: error.message });
    }
  }
  return results;
}

function rewriteUrlValue(value, pageUrl, articleFile, outRoot, mirroredAssets) {
  const url = resolveUrl(value, pageUrl);
  if (!url) return value;

  if (isLocalUrl(url) && isImageUrl(url)) {
    const asset = mirroredAssets.get(url.href);
    if (asset?.ok) return relativePath(articleFile, asset.path);
    return url.href;
  }

  if (
    isLocalUrl(url) &&
    url.pathname.endsWith('.htm') &&
    (url.pathname.includes('/Topics/') || url.pathname.includes('/MicroContent/'))
  ) {
    const target = localArticleOutputPath(outRoot, url);
    return relativePath(articleFile, target) + url.hash;
  }

  return url.href;
}

function rewriteSrcset(value, pageUrl, articleFile, outRoot, mirroredAssets) {
  return splitSrcset(value)
    .map((item) => {
      const rewritten = rewriteUrlValue(item.url, pageUrl, articleFile, outRoot, mirroredAssets);
      return [rewritten, item.descriptor].filter(Boolean).join(' ');
    })
    .join(', ');
}

function rewriteArticleHtml(html, pageUrl, articleFile, outRoot, mirroredAssets) {
  let rewritten = html
    .replace(/\r/g, '')
    .replace(/<MadCap:[^>]+\/>/gi, '')
    .replace(/<\/?MadCap:[^>]+>/gi, '');
  for (const attr of ['src', 'href', 'data-src', 'data-mc-thumbnail']) {
    const re = new RegExp(`\\b${attr}=(["'])(.*?)\\1`, 'gi');
    rewritten = rewritten.replace(re, (full, quote, value) => {
      return `${attr}=${quote}${rewriteUrlValue(value, pageUrl, articleFile, outRoot, mirroredAssets)}${quote}`;
    });
  }
  rewritten = rewritten.replace(/\bsrcset=(["'])(.*?)\1/gi, (full, quote, value) => {
    return `srcset=${quote}${rewriteSrcset(value, pageUrl, articleFile, outRoot, mirroredAssets)}${quote}`;
  });
  return rewritten;
}

function buildPortableHtml({ title, sourceUrl, articleHtml }) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)}</title>
  <style>
    body { color: #202428; font-family: Arial, Helvetica, sans-serif; line-height: 1.5; margin: 0; background: #f7f8fa; }
    main { box-sizing: border-box; max-width: 980px; margin: 0 auto; padding: 32px 24px 56px; background: #fff; min-height: 100vh; }
    .source { color: #5d6873; font-size: 13px; margin: 0 0 24px; overflow-wrap: anywhere; }
    h1, h2, h3, h4 { color: #13314c; line-height: 1.2; }
    img { max-width: 100%; height: auto; }
    table { border-collapse: collapse; max-width: 100%; overflow-x: auto; }
    th, td { border: 1px solid #d7dde3; padding: 6px 8px; vertical-align: top; }
    th { background: #eef3f7; }
    code, pre { background: #f1f3f5; border-radius: 4px; }
    pre { overflow-x: auto; padding: 12px; }
    a { color: #006da8; }
  </style>
</head>
<body>
<main>
  <p class="source">Source: <a href="${escapeHtml(sourceUrl)}">${escapeHtml(sourceUrl)}</a></p>
${articleHtml}
</main>
</body>
</html>
`;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  await fs.mkdir(args.out, { recursive: true });
  const stateDir = path.join(args.out, 'state');
  const articleIndexPath = path.join(stateDir, 'article-index.json');
  const changeSummaryPath = path.join(stateDir, 'change-summary.json');
  const previousIndex = await readJsonIfExists(articleIndexPath, { schemaVersion: 1, articles: {} });
  const previousArticles = previousIndex.articles || {};
  const previousManifest = await readJsonIfExists(path.join(stateDir, 'manifest.json'), null);
  const previousSummary = await readJsonIfExists(changeSummaryPath, null);

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

  let manifest = {
    source: BASE_URL,
    sitemapUrl,
    robotsUrl,
    robotsDisallowAll: disallowed,
    discoveredTopicUrls: urls.length,
    selectedTopicUrls: selected.length,
    generatedAt: new Date().toISOString(),
    urls: selected,
  };
  await fs.mkdir(stateDir, { recursive: true });
  await fs.writeFile(path.join(args.out, 'state', 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`);
  const inventory = await writeSitemapInventory(args.out, sitemap, manifest);

  if (args.sitemapOnly) {
    console.log(
      `Done. Inventoried ${inventory.entries.length} sitemap URLs: ` +
        `${inventory.counts.article || 0} articles, ${inventory.counts.microcontent || 0} microcontent URLs.`,
    );
    return;
  }

  const runSummary = {
    schemaVersion: 1,
    generatedAt: manifest.generatedAt,
    mode: args.incremental ? 'incremental' : 'full-refresh',
    selected: selected.length,
    fetched: 0,
    skipped: 0,
    added: 0,
    changed: 0,
    unchanged: 0,
    removed: 0,
    failed: 0,
    addedUrls: [],
    changedUrls: [],
    removedUrls: [],
    failedUrls: [],
  };
  const nextArticles = {};
  const selectedSet = new Set(selected);
  for (const url of Object.keys(previousArticles)) {
    if (!selectedSet.has(url)) {
      runSummary.removed += 1;
      runSummary.removedUrls.push(url);
    }
  }

  let processed = 0;
  for (const url of selected) {
    processed += 1;
    const previous = previousArticles[url] || null;
    const paths = articlePathSet(args.out, url, args);
    const existed = Boolean(previous) || (await articleExists(paths));
    const metadata = args.incremental ? await fetchPageMetadata(url) : null;
    if (args.incremental && previous && validatorsMatch(previous, metadata)) {
      nextArticles[url] = {
        ...previous,
        ...metadata,
        url,
        status: 'unchanged',
        checkedAt: previous.checkedAt || previous.fetchedAt || manifest.generatedAt,
        validators: mergeValidators(previous, metadata),
      };
      runSummary.skipped += 1;
      runSummary.unchanged += 1;
      console.log(`skipped ${processed}/${selected.length}: ${url}`);
      continue;
    }

    const html = await fetchText(url);
    const mainHtml = extractMainHtml(html);
    const title = extractTitle(html, url);
    const mainWithoutTitle = mainHtml.replace(/^\s*<h1\b[^>]*>[\s\S]*?<\/h1>/i, '');
    const text = htmlToText(mainWithoutTitle);
    const markdown = `# ${title}\n\nSource: ${url}\n\n${text}\n`;
    const mdPath = paths.markdown;
    const previousMarkdown = await readTextIfExists(mdPath);
    await fs.mkdir(path.dirname(mdPath), { recursive: true });
    await fs.writeFile(mdPath, markdown);
    let portableHtml = null;
    if (args.mirrorHtml) {
      const articlePath = paths.portableHtml;
      const mirroredAssets = await mirrorImageAssets(mainHtml, url, args.out);
      const rewrittenHtml = rewriteArticleHtml(mainHtml, url, articlePath, args.out, mirroredAssets);
      portableHtml = buildPortableHtml({ title, sourceUrl: url, articleHtml: rewrittenHtml });
      await fs.mkdir(path.dirname(articlePath), { recursive: true });
      await fs.writeFile(articlePath, portableHtml);
    }
    if (args.rawHtml) {
      const rawPath = paths.rawHtml;
      await fs.mkdir(path.dirname(rawPath), { recursive: true });
      await fs.writeFile(rawPath, html);
    }
    const hashes = {
      rawHtml: sha256(html),
      markdown: sha256(markdown),
      portableHtml: portableHtml ? sha256(portableHtml) : null,
    };
    const contentChanged = previous
      ? previous.hashes?.rawHtml !== hashes.rawHtml || previous.hashes?.markdown !== hashes.markdown
      : previousMarkdown !== null && previousMarkdown !== markdown;
    const status = existed ? (contentChanged ? 'changed' : 'unchanged') : 'added';
    if (status === 'added') {
      runSummary.added += 1;
      runSummary.addedUrls.push(url);
    } else if (status === 'changed') {
      runSummary.changed += 1;
      runSummary.changedUrls.push(url);
    } else {
      runSummary.unchanged += 1;
    }
    runSummary.fetched += 1;
    nextArticles[url] = {
      url,
      title,
      status,
      checkedAt: manifest.generatedAt,
      fetchedAt: manifest.generatedAt,
      ...(metadata || {}),
      validators: mergeValidators(previous, metadata),
      paths: {
        markdown: path.relative(args.out, paths.markdown).split(path.sep).join('/'),
        portableHtml: paths.portableHtml ? path.relative(args.out, paths.portableHtml).split(path.sep).join('/') : null,
        rawHtml: paths.rawHtml ? path.relative(args.out, paths.rawHtml).split(path.sep).join('/') : null,
      },
      hashes,
    };
    console.log(`${status} ${processed}/${selected.length}: ${url}`);
    if (args.delayMs > 0 && processed < selected.length) {
      await sleep(args.delayMs);
    }
  }

  const nextIndex = {
    schemaVersion: 1,
    generatedAt: manifest.generatedAt,
    source: BASE_URL,
    sitemapUrl,
    includeMicroContent: args.includeMicroContent,
    articles: nextArticles,
  };
  runSummary.contentChanged = runSummary.added + runSummary.changed + runSummary.removed + runSummary.failed > 0;
  if (!runSummary.contentChanged && previousManifest) {
    manifest = previousManifest;
    nextIndex.generatedAt = previousIndex.generatedAt || previousManifest.generatedAt || nextIndex.generatedAt;
    if (previousSummary && previousSummary.contentChanged === false) {
      runSummary.generatedAt = previousSummary.generatedAt;
    }
    await writeSitemapInventory(args.out, sitemap, manifest);
  }
  await fs.writeFile(articleIndexPath, `${JSON.stringify(nextIndex, null, 2)}\n`);
  manifest.changeSummary = {
    selected: runSummary.selected,
    fetched: runSummary.fetched,
    skipped: runSummary.skipped,
    added: runSummary.added,
    changed: runSummary.changed,
    unchanged: runSummary.unchanged,
    removed: runSummary.removed,
    failed: runSummary.failed,
  };
  await fs.writeFile(path.join(args.out, 'state', 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`);
  await fs.writeFile(changeSummaryPath, `${JSON.stringify(runSummary, null, 2)}\n`);

  console.log(
    `Done. Discovered ${urls.length} topic URLs; ` +
      `fetched ${runSummary.fetched}, skipped ${runSummary.skipped}, ` +
      `added ${runSummary.added}, changed ${runSummary.changed}, removed ${runSummary.removed}.`,
  );
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exit(1);
});
