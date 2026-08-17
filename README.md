# Robert Sory Jr. Portfolio

This repository hosts the public GitHub Pages portfolio at **https://shortview231.github.io/**.

The portfolio is intentionally optimized for hiring into **data operations, reporting, analytics, workflow automation, business systems, and technical support** roles.

## Hiring story

The site presents one consistent professional through-line:

`operations experience -> data analysis -> automation -> stateful systems -> reproducible research`

The goal is not to present a collection of unrelated projects. The portfolio shows a repeated pattern of turning messy information and operational processes into structured, inspectable systems.

## Current homepage structure

The homepage prioritizes:

1. clear Data Operations & Automation positioning
2. target-role fit
3. flagship technical projects
4. technical stack
5. real operations experience
6. research and reproducibility work
7. compact proof
8. public build history
9. certification and contact paths

## Flagship projects

The current hiring surface prioritizes:

- **Luna MLB Analytics Core** - Python/SQLite analytics ingestion, derivation, testing, and dashboard workflow
- **Retail Operations Simulator** - inventory, vendor, order, loadout, persisted state, and reporting system
- **Career Engine Showcase** - structured discover/normalize/dedupe/score/shortlist/export pipeline
- **Luna Vision Research** - explicitly maturity-labeled assistive computer-vision R&D

Supporting systems include Wallet Engine, Luna Export, Luna Comms, accessibility work, and additional research/analytics projects.

## Evidence policy

Public claims should be inspectable and should distinguish clearly between:

- work experience
- implemented software
- public-safe demonstrations
- research findings
- proposed architecture
- future work

Research work must not be presented as implemented or field-tested unless it actually reaches those stages.

See [`HIRING_EVIDENCE.md`](HIRING_EVIDENCE.md) for a compact map of verified experience and portfolio evidence.

## Site architecture

The site remains static and GitHub Pages-compatible:

- `index.html` - homepage structure and recruiter-facing copy
- `assets/css/site.css` - shared visual system
- `assets/js/site.js` - dynamic public content modules and post-feed rendering
- `posts/posts.json` - export-driven public build feed
- `posts/*.html` - individual public update pages
- `projects/` - reserved for deeper project/case-study pages

Stack:

`HTML + CSS + JavaScript + JSON + GitHub Pages`

## Public build feed

`posts/posts.json` allows outward-safe project updates to appear without manually rebuilding the homepage for every development milestone.

Required fields:

- `slug`
- `title`
- `published_at`
- `summary`
- `path`

Optional fields include:

- `kind`
- `systems`
- `stack`
- `impact`
- `featured`

## Publication boundary

The portfolio should contain public-safe proof rather than private runtime state.

Do not publish:

- credentials or tokens
- private financial/account data
- personally identifying private datasets
- internal artifacts that have not been reviewed for public release
- claims that exceed the demonstrated maturity of a project

The surrounding Luna workflow uses explicit public/private boundaries so technical depth can be shown without treating private operational data as portfolio material.
