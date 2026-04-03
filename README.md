# shortview231.github.io

This repository hosts the public GitHub Pages portfolio for `https://shortview231.github.io/`.

## Current Site Shape

- Homepage entry point: `index.html`
- Shared homepage and post styling: `assets/css/site.css`
- Homepage rendering/data logic: `assets/js/site.js`
- Export-driven posts index: `posts/posts.json`
- Individual public post pages: `posts/*.html`

The site remains plain static `HTML + CSS + JS + JSON` and is compatible with GitHub Pages.

## Homepage Model

The homepage is now Luna-first and built around these sections:

- Hero
- Active Systems
- Latest Public Updates
- Proof Layer
- Why This Matters
- Legacy / Origins
- About
- Contact

### Homepage Content Sources

- `index.html`
  - owns the section structure and core copy
- `assets/js/site.js`
  - owns the current system cards
  - owns proof links
  - owns legacy/origins timeline items
  - fetches and renders `posts/posts.json`

## Post Feed Contract

`posts/posts.json` is the homepage feed source.

Required fields:

- `slug`
- `title`
- `published_at`
- `summary`
- `path`

Optional fields now supported:

- `kind`
- `systems`
- `stack`
- `impact`
- `featured`

The homepage renderer is backward compatible with older entries that only provide the required fields.

## Post Pages

Post pages are standalone static HTML files under `posts/`.

Each page can now use the shared visual shell and should ideally include:

- published date
- systems touched
- stack/tags
- why it matters
- report-style sections such as `What changed`, `Why it matters`, `Proof and context`, and `Next move`

## Asset Guidance

Legacy assets remain live in:

- `assets/img/`
- `assets/video/`

Preferred future export targets remain:

- `assets/images/`
- `assets/pdfs/`
- `posts/`
- `projects/`

Do not move existing referenced assets casually unless the references are updated in the site.

## Update Guidance

- Homepage structure changes start in `index.html`
- Shared visual system changes start in `assets/css/site.css`
- Homepage content modules and rendering changes start in `assets/js/site.js`
- New outward-safe public posts should update `posts/posts.json` and add the matching `posts/*.html` file
- Keep the site static and avoid introducing any backend or framework dependency unless absolutely necessary
