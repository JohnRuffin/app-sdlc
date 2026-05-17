# [TASK] Add a hero section with tagline and description

## Context

Add a styled hero section to the homepage that communicates what the app does.

## Requirements

- use `topology:combined`
- add a hero section below the nav with a tagline and short description
- tagline: "Ship faster with spec-driven development"
- description: "Write a GitHub issue. An agent implements it, verifies it, and merges it. Two commands."
- use semantic HTML (`<section>`, `<h2>`, `<p>`)
- stay within a single page file
- avoid routing, auth, API, or architecture changes

## Acceptance Criteria

- the homepage renders a `<section>` containing an `<h2>` with the tagline text
- the homepage renders a `<p>` with the description text
- existing heading, nav, and footer remain visible
- Playwright can assert the section is visible (`page.locator('section')`)
- `npm run build` passes
- existing tests still pass

## Target Files

- `app/page.tsx`

## Notes

This issue produces a visually interesting change for demo screenshots.
