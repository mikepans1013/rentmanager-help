# Rent Manager Help Archive

This repo inventories the public Rent Manager Help site at:

https://rmxhelp.rentmanager.com/

The archive mirrors topic HTML and local article assets, including JPEG/PNG/GIF/SVG images referenced inside articles. Online training videos remain as links in the reproduced HTML and are not downloaded.

## Current Snapshot

- Source sitemap: `state/source-sitemap.xml`
- All sitemap URLs: `sitemap/all-urls.json`
- All sitemap URLs as CSV: `sitemap/all-urls.csv`
- Article-only URL list: `sitemap/articles.json`
- Article-only Markdown sitemap: `sitemap/articles.md`

Current archive contents:

- Total sitemap URLs: 8,632
- Normal topic articles: 2,274
- MicroContent pages: 308
- Mirrored portable HTML pages: 2,582
- Extracted Markdown pages: 2,582
- Raw source HTML pages: 2,582
- Local copied assets: 3,510
- Verified local image references in portable HTML: 11,390

## Important Access Note

`https://rmxhelp.rentmanager.com/robots.txt` currently returns:

```txt
User-agent: *
Disallow: /
```

The tooling records that state and refuses article crawling unless `--permission-confirmed` is passed. That keeps sitemap inventory, permission checks, and full mirroring as distinct steps.

## Commands

Refresh only the sitemap inventory:

```bash
node scripts/rmx_help_archive.js --permission-confirmed --sitemap-only --out .
```

Test article extraction with a small batch:

```bash
node scripts/rmx_help_archive.js --permission-confirmed --include-microcontent --limit 25 --delay-ms 1000 --mirror-html --raw-html --out .
```

Full article extraction, after permission/rate-limit approach is approved:

```bash
node scripts/rmx_help_archive.js --permission-confirmed --include-microcontent --delay-ms 1000 --mirror-html --raw-html --out .
```

By default, article extraction runs incrementally. It still reconciles the full
sitemap, but known pages are skipped when their saved HTTP validators match the
current `ETag` or `Last-Modified`/`Content-Length` response. Use
`--full-refresh` to force every selected page to be fetched again.

## Archive Layout

The mirrored archive is organized as:

- `Topics/**/*.html` - readable portable topic HTML
- `MicroContent/**/*.html` - readable portable MicroContent HTML
- `Topics/**/*.md` - extracted Markdown text for bot search and retrieval
- `MicroContent/**/*.md` - extracted MicroContent Markdown
- `raw/**` - original source `*.htm` captures
- `assets/**` - local copies of article images and other static assets
- `sitemap/**` - current URL inventory
- `state/article-index.json` - per-URL validators, output paths, and content hashes
- `state/change-summary.json` - latest refresh counts for fetched, skipped, added, changed, removed, and unchanged pages
- `state/**` - raw source sitemap, manifests, and crawl state

## Monthly Refresh

This archive is refreshed by the OpenClaw cron
`rentmanager-help-monthly-archive-refresh`
(`6452d93a-82b8-4f72-be72-ef252df95d8f`) on the first day of each month at
06:20 UTC.

The cron runs the installed `rentmanager-help-archive` skill helper from:

```bash
/home/openclaw/.openclaw/workspace/skills/rentmanager-help-archive/scripts/run_rentmanager_help_refresh.sh
```

The helper pulls the latest archive repo, runs the approved incremental mirror
scrape, updates the AI export files when archive content changes, commits
meaningful changes, and pushes back to `mikepans1013/rentmanager-help`.

The CLI repo `mikepans1013/RentManagerCLI` should read this repo as its Help
corpus source via `RENTMANAGER_HELP_ROOT` or a sibling checkout named
`rentmanager-help-archive`; it should not maintain a separate embedded copy of
the article archive.
