# chore(test): configure Vitest, React Testing Library, and CI test runner

**Labels**: `type: chore`, `priority: critical`, `size: s`, `status: ready`  
**Milestone**: `Milestone 1: MVP Core & Rigor`  

## Overview
Establishes the automated testing foundation required by the project's quality standard (`GEMINI.md` Prime Directive: "No code without tests"). Installs and configures Vitest, React Testing Library, and JSDOM, adds testing scripts, and updates the GitHub Actions workflow to run automated tests on pull requests and pushes.

## User Story
As a developer and open-source contributor, I want automated component and unit testing running locally and in CI, so that all subsequent features, UI changes, and refactors are verified against regressions and adhere to engineering standards.

## Problem / Motivation
Currently, `package.json` only contains `"dev"`, `"build"`, `"lint"`, and `"preview"`. There is no test runner installed or configured. Under the master rules in `.agents/GEMINI.md`, no feature can be merged or deployed without automated test coverage. Establishing this harness is an essential blocker for all subsequent feature implementation.

## Proposed Solution
1. Install testing dependencies:
   - `vitest` (fast Vite-native test runner)
   - `@testing-library/react` (component test utilities)
   - `@testing-library/jest-dom` (custom DOM element matchers)
   - `@testing-library/user-event` (simulating user interactions)
   - `jsdom` (simulated browser environment)
2. Configure `vite.config.js` to include the `test` block (`globals: true`, `environment: 'jsdom'`, `setupFiles: './src/test/setup.js'`).
3. Create `src/test/setup.js` importing `@testing-library/jest-dom`.
4. Add baseline smoke tests in `src/test/App.test.jsx` and `src/test/About.test.jsx`.
5. Update `package.json` with `"test": "vitest run"` and `"test:watch": "vitest"`.
6. Add test execution to `.github/workflows/deploy.yml` before the build and deployment steps.

## Acceptance Criteria
- [ ] AC 1: `npm test` runs Vitest synchronously in CI mode and passes with 0 errors.
- [ ] AC 2: `npm run test:watch` starts Vitest in interactive watch mode for local development.
- [ ] AC 3: `src/test/setup.js` configures `@testing-library/jest-dom` matchers (such as `toBeInTheDocument()`).
- [ ] AC 4: Baseline smoke tests for `App.jsx` and `About.jsx` verify clean rendering without console errors.
- [ ] AC 5: `.github/workflows/deploy.yml` executes `npm test` before `npm run build` and blocks deployment if tests fail.

## Out of Scope
- Full end-to-end testing with Playwright or Cypress (deferred to Milestone 3).
- Achieving 100% branch coverage across unfinished future features.

## Dependencies
- None (baseline infrastructure task).

## Technical Notes
- Target packages must be compatible with React 19 (`@types/react` 19.2.14, `react` 19.2.4).
- Ensure `vite.config.js` uses `/// <reference types="vitest" />` or proper Vite config typing.

## Definition of Done
- [ ] Code is fully written and self-reviewed.
- [ ] Unit/Integration tests added and passing.
- [ ] Documentation updated in `README.md` with test running instructions.
- [ ] Feature meets all Acceptance Criteria.
- [ ] PR approved and merged.
