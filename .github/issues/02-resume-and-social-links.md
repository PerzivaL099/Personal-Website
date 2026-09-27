# feat(nav): add PDF resume download/view action and social profile links

**Labels**: `type: feature`, `priority: high`, `size: s`, `status: ready`  
**Milestone**: `Milestone 1: MVP Core & Rigor`  

## Overview
Provides immediate 1-click access to Mario's resume (PDF view/download) from the navigation header and about/hero section, and adds LinkedIn alongside existing GitHub and Email links in both the hero and footer sections.

## User Story
As a technical recruiter or hiring manager, I want to quickly open or download Mario's resume and view his LinkedIn profile from the top navigation bar or the about section, so that I can evaluate his qualifications and initiate interview outreach without friction.

## Problem / Motivation
Technical recruiters typically evaluate candidates in 10-20 seconds. Currently, Mario's site only links to GitHub and an email address. There is no resume link anywhere on the site, and no link to LinkedIn. Adding prominent resume and LinkedIn actions directly addresses Persona 1 (Technical Recruiters & Hiring Managers) from `BRAINSTORMING.md`.

## Proposed Solution
1. Update `src/data/aboutData.js` to include:
   - `resumeUrl`: link to `/resume.pdf` (stored in `public/` directory).
   - `linkedin`: verified LinkedIn profile URL.
2. In the navigation bar (`App.jsx` or new `Navbar.jsx`), add a prominent "Resume" action button with visual accent styling.
3. In `src/components/About.jsx`, add a primary "View Resume" button alongside "Email Me" and "GitHub".
4. In `App.jsx` footer, render the LinkedIn link with external link security attributes (`target="_blank" rel="noopener noreferrer"`).
5. Place a placeholder or starter `resume.pdf` in `public/resume.pdf` to ensure the download link functions immediately.

## Acceptance Criteria
- [ ] AC 1: A "Resume" button is clearly visible in the desktop navbar and links to `/resume.pdf`.
- [ ] AC 2: A "View Resume" button is prominently displayed in the About hero section with primary button styling.
- [ ] AC 3: A LinkedIn link is displayed in both the About action button group and the site footer.
- [ ] AC 4: All external links (GitHub, LinkedIn, Resume) open in a new browser tab with `target="_blank"` and `rel="noopener noreferrer"`.
- [ ] AC 5: Unit/component tests in `src/test/About.test.jsx` verify that the Resume, LinkedIn, and GitHub links render with expected `href` values.

## Out of Scope
- Dynamic in-browser PDF canvas viewer (linking directly to static `/resume.pdf` is sufficient).
- Automated resume parsing or version tracking.

## Dependencies
- Issue #1: Test infrastructure must be in place to write the verifying unit tests.

## Technical Notes
- Store the target document as `public/resume.pdf`. In Vite, files in `public/` are served at the root URL path.
- Maintain consistent button height and hover micro-interactions via Tailwind CSS.

## Definition of Done
- [ ] Code is fully written and self-reviewed.
- [ ] Unit/Integration tests added and passing.
- [ ] Documentation updated with resume asset guidelines.
- [ ] Feature meets all Acceptance Criteria.
- [ ] PR approved and merged.
