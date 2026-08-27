# Ownership

- Workflow ID: `rentmanager-help-private-archive`
- Type: output repo / help corpus
- Owner agent: C-3PO / `main`
- Operator: Michael Pansolini
- Canonical repo: `https://github.com/mikepans1013/rentmanager-help`
- Local path: `/home/openclaw/.openclaw/workspace/rentmanager-help-archive`
- Updated by: `rentmanager-help-archive-skill`, `rentmanager-help-monthly-archive-refresh`
- Consumed by: `rentmanager-cli`

## Registry

The shared ownership record lives in:

- `/home/openclaw/.openclaw/workspace/openclaw-agent-orchestrator/docs/WORKFLOW-OWNERSHIP.md`
- `/home/openclaw/.openclaw/workspace/openclaw-agent-orchestrator/data/workflow-ownership.json`

Update those files in the same change whenever archive repo routing, scraper
behavior, cron schedule, CLI help-corpus routing, Drive export routing, privacy,
or ownership materially changes.

## Boundaries

This repo is the single source of truth for mirrored Rent Manager Help
articles. Do not create or maintain a second article archive in the CLI or
scraper repos. Full crawling is allowed only when Michael approves the run or
the existing approved monthly cron is executing.
