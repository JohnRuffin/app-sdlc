# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: homepage.spec.ts >> homepage has welcome heading
- Location: tests/homepage.spec.ts:3:5

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/
Call log:
  - navigating to "http://localhost:3000/", waiting until "load"

```

# Test source

```ts
  1 | import { test, expect } from "@playwright/test";
  2 | 
  3 | test("homepage has welcome heading", async ({ page }) => {
> 4 |   await page.goto("/");
    |              ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/
  5 |   await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  6 | });
  7 | 
```