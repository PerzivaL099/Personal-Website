# feat(seo): configure OpenGraph metadata, SEO tags, and custom favicon

**Labels**: `type: feature`, `priority: medium`, `size: xs`, `status: ready`  
**Milestone**: `Milestone 1: MVP Core & Rigor`  

## Overview
Updates `index.html` and static assets with production-grade metadata, including a descriptive title, professional meta descriptions, OpenGraph tags, Twitter Card tags, canonical link, and branding favicon for social media link sharing.

## User Story
As Mario or a visiting recruiter sharing the portfolio URL across LinkedIn, Twitter/X, or Slack, I want rich link previews featuring a descriptive summary, title, and preview image so that the portfolio presents a polished, senior-level impression.

## Problem / Motivation
Currently, `index.html` contains:
- `<title>mario-portfolio</title>` (default placeholder).
- No `<meta name="description">`.
- No OpenGraph tags (`og:title`, `og:description`, `og:image`, `og:url`).
- No Twitter Card tags (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`).
- Default Vite SVG favicon.
This results in raw URLs or generic snippets when shared on professional networks.

## Proposed Solution
1. Update `index.html` title to: `"Mario Estrada | Software Engineer — Distributed Systems & Cloud Architecture"`.
2. Add `<meta name="description" content="Portfolio of Mario Estrada, Software Engineer specializing in distributed systems, high-availability backends, and AI integrations." />`.
3. Add OpenGraph tags:
   - `og:type` -> `website`
   - `og:title` -> `"Mario Estrada | Software Engineer"`
   - `og:description` -> `"Portfolio showcasing scalable distributed systems, database optimization, and cloud architecture."`
   - `og:url` -> `"https://perzival099.github.io/Personal-Website/"`
   - `og:image` -> link to preview banner image in `public/`
4. Add Twitter Card metadata (`twitter:card` summary_large_image).
5. Add `<link rel="canonical" href="https://perzival099.github.io/Personal-Website/" />`.
6. Add professional favicon assets in `public/`.

## Acceptance Criteria
- [ ] AC 1: Page title is updated to `"Mario Estrada | Software Engineer — Distributed Systems & Cloud Architecture"`.
- [ ] AC 2: Meta description is present, concise (between 140-160 characters), and accurately summarizes Mario's specialty.
- [ ] AC 3: OpenGraph tags (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`) are present and validate correctly in HTML syntax.
- [ ] AC 4: Twitter card tags are included for social sharing previews.
- [ ] AC 5: A build check (`npm run build`) verifies that `index.html` builds without asset resolution warnings.

## Out of Scope
- Server-side rendering (SSR) or dynamic per-route OpenGraph image generation.
- Third-party analytics trackers (e.g. Google Analytics / Plausible).

## Dependencies
- None (can be executed in parallel or as part of Milestone 1).

## Technical Notes
- Ensure paths in `index.html` respect the Vite base URL (especially when deploying to GitHub Pages at `/Personal-Website/`).

## Definition of Done
- [ ] Code is fully written and self-reviewed.
- [ ] HTML metadata tags validated against OpenGraph standards.
- [ ] Build succeeds with `npm run build`.
- [ ] Feature meets all Acceptance Criteria.
- [ ] PR approved and merged.
