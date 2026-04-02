# shortview231.github.io

This repository hosts the public portfolio and landing page for `shortview231.github.io`.

## Current Site Entry Point

- Homepage: `index.html`

The live homepage is currently a static single-page site. Featured project cards are defined in the inline `PROJECTS` array near the bottom of `index.html`.

## Content Structure For Future Export Updates

These folders are the canonical targets for future export-driven public content:

- `posts/`
  - future public-safe post or dev-log files
- `projects/`
  - future project showcase data, supporting notes, or project-specific public content
- `assets/images/`
  - future public-safe images for landing page, posts, or projects
- `assets/pdfs/`
  - future public-safe PDFs, reports, resumes, or attachments

## Legacy Assets

Existing site assets remain in:

- `assets/img/`
- `assets/video/`

Those paths are still live and should not be moved casually because `index.html` currently references them directly.

## Update Guidance

- Landing page updates should start in `index.html`
- Featured project updates currently live in the `PROJECTS` array inside `index.html`
- New export-driven posts should go into `posts/`
- New project-specific exported content should go into `projects/`
- New public-safe images should go into `assets/images/`
- New public-safe PDFs and report attachments should go into `assets/pdfs/`

This structure prepares the repo for export-driven updates without changing the current site behavior tonight.
