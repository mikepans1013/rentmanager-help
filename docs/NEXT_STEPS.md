# Next Steps

## 1. Confirm Permission And Scope

Before full mirroring, confirm that MHP Pros is allowed to archive the Rent Manager Help content for internal operational use. The site is publicly reachable, but its `robots.txt` disallows automated crawling.

## 2. Improve HTML Mirroring

The current script can save raw topic HTML and Markdown. The next pass should rewrite article HTML into portable files:

- Keep the article body from `#mc-main-content`.
- Preserve tables, ordered lists, headings, callouts, and links.
- Copy referenced local image assets such as JPEG, PNG, GIF, SVG, and WebP.
- Rewrite copied image references to local `assets/**` paths.
- Keep online training/video links as outbound links.
- Do not download hosted training videos.

## 3. Add Incremental State

Store per-URL metadata so cron can avoid refetching unchanged pages:

- URL
- source path
- HTTP status
- ETag, if present
- Last-Modified, if present
- content hash
- last checked timestamp
- last archived timestamp

## 4. Add Cron Later

Once the mirror behavior is approved, add a cron job that refreshes the sitemap and only fetches new or changed pages. It should use a conservative delay and fail loudly on access changes or extraction errors.
