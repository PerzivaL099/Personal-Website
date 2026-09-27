# feat(projects): enrich project cards with quantitative metrics and live repo/demo links

**Labels**: `type: feature`, `priority: high`, `size: s`, `status: ready`  
**Milestone**: `Milestone 1: MVP Core & Rigor`  

## Overview
Upgrades the Featured Projects section to highlight quantitative architectural impact (e.g. latency reduction, query throughput, data scale) and provides direct, verifiable links to GitHub repositories and live demos.

## User Story
As a senior engineer or engineering manager, I want to inspect measurable performance metrics and easily navigate to the source code or live deployment of Mario's projects, so that I can validate his claims regarding distributed systems, database optimization, and cloud architecture.

## Problem / Motivation
In `src/data/projectsData.js` and `src/components/Projects.jsx`, the current project items list high-level qualitative descriptions (e.g., "Engineered Machine Learning models"), but lack concrete quantitative metrics (e.g., latency, throughput, scale). Furthermore, there are no repository or demo links, leaving evaluators unable to review code quality. This addresses Persona 2 (Senior Engineers & Team Leads) from `BRAINSTORMING.md`.

## Proposed Solution
1. Update `src/data/projectsData.js` data model:
   - Add `metrics`: Array of structured key-value impact stats (e.g., `{ label: "Inference Latency", value: "<120ms" }` or string bullets with highlighted values).
   - Add `repoUrl`: Direct link to GitHub repository.
   - Add `demoUrl`: Optional link to live preview/demo.
2. Refactor `src/components/Projects.jsx` card layout:
   - Add a "Performance & Architecture Metrics" section with distinct badge/card styling.
   - Add button group at the bottom of each card with "Source Code" (GitHub icon) and "Live Demo" (external link icon).
   - Gracefully hide the "Live Demo" button if `demoUrl` is null or undefined.
3. Write component unit tests in `src/test/Projects.test.jsx` verifying that metric cards and links render appropriately.

## Acceptance Criteria
- [ ] AC 1: Each featured project displays at least 2 quantitative engineering metrics.
- [ ] AC 2: A "Source Code" button is rendered for each project with a valid GitHub link and opens safely in a new tab.
- [ ] AC 3: If `demoUrl` exists, a "Live Demo" button is rendered; if absent, the button is omitted without layout shifts.
- [ ] AC 4: Cards maintain responsive alignment and padding across desktop and mobile screens.
- [ ] AC 5: Component tests verify that all projects in `projectsData.js` render their title, metrics, tech stack tags, and repository links.

## Out of Scope
- Dynamic GitHub API fetching for live star counts or commit history (can be considered in future releases).
- Interactive project filtering by tag (tracked separately as Issue #7 / P2).

## Dependencies
- Issue #1: Test infrastructure for unit test verification.

## Technical Notes
- Ensure color palette and contrast meet WCAG AA standards using Tailwind CSS classes (`text-blue-400`, `bg-gray-800/90`, `border-gray-700`).

## Definition of Done
- [ ] Code is fully written and self-reviewed.
- [ ] Unit/Integration tests added and passing.
- [ ] Documentation updated with data schema definitions.
- [ ] Feature meets all Acceptance Criteria.
- [ ] PR approved and merged.
