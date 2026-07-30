# Next Steps

## 1. Confirm Permission And Scope

Before full mirroring, confirm that MHP Pros is allowed to archive the Rent Manager Help content for internal operational use. The site is publicly reachable, but its `robots.txt` disallows automated crawling.

## 2. Improve HTML Mirroring

The current script saves raw topic HTML, extracted Markdown, readable portable HTML, and local image assets. Future improvements should focus on fidelity and incremental operation:

- Preserve more of the original stylesheet behavior without depending on remote CSS.
- Add validation for local article links, not only local image links.
- Add a generated index page for browsing the archive by section.
- Add title/search metadata for another bot to consume.

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
