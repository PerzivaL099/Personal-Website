# feat(nav): implement responsive mobile navigation drawer and hamburger menu

**Labels**: `type: feature`, `priority: high`, `size: s`, `status: ready`  
**Milestone**: `Milestone 1: MVP Core & Rigor`  

## Overview
Implements a responsive mobile menu toggle (hamburger button) and collapsible slide-down drawer in the navigation bar for viewports below the `md` breakpoint (768px), restoring full navigation access for mobile and tablet visitors.

## User Story
As a mobile user visiting Mario's website on a smartphone, I want a clear hamburger menu icon that expands into a navigation drawer when tapped, so that I can easily navigate between About, Skills, Experience, and Projects sections.

## Problem / Motivation
In `src/App.jsx`, navigation links are marked `hidden md:flex`. Consequently, on mobile screens (< 768px), the entire navigation bar is completely empty except for Mario's name. Mobile visitors have no way to jump to different sections or find the resume button.

## Proposed Solution
1. Extract navigation into a reusable `src/components/Navbar.jsx` component.
2. Introduce state `isOpen` (boolean) to manage mobile menu toggle.
3. Render an accessible hamburger / close toggle button with SVG icons, visible only below `md` breakpoint (`block md:hidden`).
4. Render an animated collapsible drawer containing navigation links (#about, #skills, #experience, #projects) and the "Resume" button.
5. Close drawer automatically when any navigation link is clicked or when Escape key is pressed.
6. Include proper ARIA attributes (`aria-expanded`, `aria-label="Toggle Navigation Menu"`, `role="navigation"`).
7. Add component tests in `src/test/Navbar.test.jsx` verifying open, close, and link navigation behavior.

## Acceptance Criteria
- [ ] AC 1: Hamburger icon is visible on viewports < 768px and hidden on viewports >= 768px.
- [ ] AC 2: Clicking the hamburger button opens the navigation drawer; icon transforms to an "X" (close) icon.
- [ ] AC 3: Clicking any navigation link scrolls to the corresponding section and automatically closes the mobile drawer.
- [ ] AC 4: Tapping the "X" button or pressing the `Escape` key closes the drawer.
- [ ] AC 5: Component test verifies the toggle state transition and link rendering.

## Out of Scope
- Full-screen swipe gestures (can be considered if requested).
- Multi-level nested menus (not needed for single-page portfolio).

## Dependencies
- Issue #1: Test infrastructure for unit test verification.
- Issue #2: Resume button should be included inside the mobile drawer.

## Technical Notes
- Can use Tailwind transitions (`transition-all duration-300 ease-in-out`) without requiring bulky external animation libraries.

## Definition of Done
- [ ] Code is fully written and self-reviewed.
- [ ] Unit/Integration tests added and passing.
- [ ] Accessibility validated (keyboard navigable, ARIA attributes in place).
- [ ] Feature meets all Acceptance Criteria.
- [ ] PR approved and merged.
