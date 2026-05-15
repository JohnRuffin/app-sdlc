# [TASK] Add a nav element with app name to the homepage

## Context

Add a simple navigation bar to the homepage with the app name as a link.

## Requirements

- use `topology:combined`
- add a `<nav>` element at the top of the page
- the nav should contain a link (`<a>`) with the text "app-sdlc" pointing to "/"
- stay within a single page file
- avoid routing, auth, API, or architecture changes

## Acceptance Criteria

- the homepage renders a `<nav>` containing a link with text "app-sdlc"
- Playwright can assert the nav is visible (`page.getByRole('navigation')`)
- `npm run build` passes
- existing tests still pass

## Target Files

- `app/page.tsx`

## Notes

Third issue to validate a fully clean single-command runtime pass.
