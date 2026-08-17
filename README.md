# shortview231.github.io

This repository hosts the public GitHub Pages portfolio for `https://shortview231.github.io/`.

## Hiring-first site strategy

The portfolio is positioned for Data Operations, Reporting, Junior Data Analyst, Business Systems, Automation, and technical support opportunities.

The core professional story is:

`operations experience -> data analysis -> automation -> stateful systems -> reproducible research`

## Current homepage shape

- Hero / role fit
- Featured Work
- Technical Skills
- Professional Experience
- Research & Development
- Compact Proof
- Public Build Log
- Certification
- About Luna
- About / Contact

The site remains plain static `HTML + CSS + JS + JSON` and is compatible with GitHub Pages.

## Recruiter-facing priorities

Featured public work currently emphasizes:

1. Luna MLB Analytics Core - data ingestion, SQLite, deterministic derivations, testing, reporting
2. Retail Operations Simulator - operations modeling, inventory, vendor/order workflows, persisted state
3. Career Engine Showcase - discovery, normalization, deduplication, scoring, SQLite, deterministic exports
4. Luna Vision Research - explicitly labeled research + architecture with evidence maturity controls

Supporting repositories such as Wallet Engine, Luna Export, and Luna Comms reinforce the same data-operations and workflow-automation story.

## Evidence discipline

Public claims should remain traceable to work history, resume source materials, or public project evidence.

See `HIRING_EVIDENCE.md` for the current claim/evidence map.

Research and engineering work should preserve the distinction between:

`researched -> proposed -> reproduced -> implemented -> benchmarked -> field tested`

## Site files

- Homepage: `index.html`
- Shared styling: `assets/css/site.css`
- Build-log and legacy rendering: `assets/js/site.js`
- Export-driven posts index: `posts/posts.json`
- Individual public updates: `posts/*.html`
- Current recruiter resume: `Robert_Sory_Data_Automation_Resume.pdf`

## Post feed contract

`posts/posts.json` is the homepage build-log source.

Required fields:

- `slug`
- `title`
- `published_at`
- `summary`
- `path`

Optional fields:

- `kind`
- `systems`
- `stack`
- `impact`
- `featured`

## Publication boundary

The portfolio should expose enough evidence for a recruiter or collaborator to evaluate the work while keeping private data, credentials, personal financial records, and sensitive internal state out of public repositories.

## Update guidance

- Homepage hiring-story changes start in `index.html`
- Shared visual changes start in `assets/css/site.css`
- Build-log rendering changes start in `assets/js/site.js`
- New outward-safe public posts update `posts/posts.json` and add the matching `posts/*.html`
- Keep the site static unless a backend provides a clear hiring or accessibility benefit
- Prefer strengthening proof behind existing flagship work over adding low-signal projects
