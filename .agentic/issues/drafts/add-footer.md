# [TASK] Add a footer to the homepage

## Context

Add a simple footer element to the homepage to validate the combined runtime on a second pass.

## Requirements

- use `topology:combined`
- add a `<footer>` element to the homepage
- the footer should contain the text "Built with agentic-sdlc"
- stay within a single page file
- avoid routing, auth, API, or architecture changes

## Acceptance Criteria

- the homepage renders a `<footer>` with the text "Built with agentic-sdlc"
- Playwright can assert the footer is visible (`page.getByRole('contentinfo')`)
- `npm run build` passes
- existing heading test still passes

## Target Files

- `app/page.tsx`

## Notes

Second issue to validate the combined runtime flow after the pilot.
