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
5. AI in Education R-001 - large-scale survey analysis, research design, dataset acquisition, Census/BLS/O*NET integration, competing hypotheses, and explicit causal safeguards

Supporting repositories such as Wallet Engine, Luna Export, and Luna Comms reinforce the same data-operations and workflow-automation story.

## AI in Education research case study

The portfolio now includes `projects/ai-in-education.html`, an active case study showing how R-001 evolved from a smaller sentiment/test-score project into a multi-layer evidence system.

The current public-safe evidence story includes:

- a 23,218-response higher-education ChatGPT survey with 174 variables
- student adoption, benefit, integrity, misinformation, and critical-thinking findings
- U.S. educator/public evidence
- Census Business Trends and Outlook Survey AI-adoption data
- O*NET occupation/task structure
- OpenAI GPTs-are-GPTs occupation and task exposure data
- BLS OEWS employment and wage datasets for 2021 through 2025
- an explicit next analysis joining AI exposure to actual occupation employment and wage changes
- a long-run education-outcomes track designed to compare Common Core, social-media/smartphone, COVID, and generative-AI eras without assuming the conclusion in advance

The project is deliberately labeled **research in progress**. Exposure is not presented as job replacement, correlation is not presented as causation, and preliminary survey findings are not presented as final outcomes.

## Evidence discipline

Public claims should remain traceable to work history, resume source materials, or public project evidence.

See `HIRING_EVIDENCE.md` for the current claim/evidence map.

Research and engineering work should preserve the distinction between:

`researched -> proposed -> reproduced -> implemented -> benchmarked -> field tested`

For analytical research, the equivalent discipline is:

`question -> acquisition -> audit -> exploratory analysis -> competing hypotheses -> additional evidence -> provisional finding -> supported conclusion`

## Site files

- Homepage: `index.html`
- Shared styling: `assets/css/site.css`
- Build-log and legacy rendering: `assets/js/site.js`
- Export-driven posts index: `posts/posts.json`
- Individual public updates: `posts/*.html`
- AI in Education case study: `projects/ai-in-education.html`
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
- Research case studies can live under `projects/` and should link back to their public repositories
- Keep the site static unless a backend provides a clear hiring or accessibility benefit
- Prefer strengthening proof behind existing flagship work over adding low-signal projects
