# [TASK] Add a subtitle below the heading

## Context

Add a subtitle paragraph below the existing h1 heading on the homepage.

## Requirements

- use `topology:combined`
- add a `<p>` element directly below the existing `<h1>`
- the paragraph should contain the text "Issue-first delivery, powered by agents."
- do not remove or modify any existing elements
- stay within a single page file

## Acceptance Criteria

- the homepage renders a `<p>` with the text "Issue-first delivery, powered by agents."
- the existing `<h1>` heading is still present and visible
- the existing `<nav>` and `<footer>` are still present
- `npm run build` passes
- existing Playwright tests still pass

## Target Files

- `app/page.tsx`

## Notes

Tests the base branch resolution (no --base flag) and auto-retry if verification fails.
