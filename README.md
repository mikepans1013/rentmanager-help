# MHP Pros Rent Manager Help Archive

This repo inventories the public Rent Manager Help site at:

https://rmxhelp.rentmanager.com/

The first milestone is a durable sitemap. Later milestones can mirror topic HTML and local article assets, including JPEG/PNG/GIF/SVG images referenced inside articles. Online training videos should remain as links in the reproduced HTML, not downloaded.

## Current Snapshot

- Source sitemap: `state/source-sitemap.xml`
- All sitemap URLs: `sitemap/all-urls.json`
- All sitemap URLs as CSV: `sitemap/all-urls.csv`
- Article-only URL list: `sitemap/articles.json`
- Article-only Markdown sitemap: `sitemap/articles.md`

Snapshot counts from the initial run:

- Total sitemap URLs: 8,632
- Normal topic articles: 2,274
- MicroContent pages: 308

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
node scripts/rmx_help_archive.js --permission-confirmed --limit 25 --delay-ms 1000 --raw-html --out .
```

Full article extraction, after permission/rate-limit approach is approved:

```bash
node scripts/rmx_help_archive.js --permission-confirmed --delay-ms 1000 --raw-html --out .
```

## Planned Archive Layout

When mirroring is enabled, the intended layout is:

- `Topics/**/*.html` - reproduced source/topic HTML
- `Topics/**/*.md` - extracted Markdown text for bot search and retrieval
- `assets/**` - local copies of article images and other static assets
- `sitemap/**` - current URL inventory
- `state/**` - raw source sitemap, manifests, and future crawl state

## Cron Direction

The future cron should:

1. Fetch `Sitemap.xml`.
2. Compare it with `sitemap/all-urls.json`.
3. Commit sitemap changes.
4. Fetch only newly added or changed article URLs.
5. Commit mirrored article and asset changes.
6. Notify only on failures or meaningful content changes.
