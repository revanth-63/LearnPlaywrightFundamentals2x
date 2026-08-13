// Task 19th July 2026 | Project Static Table
// Task 2 Dynamic Table Mia Hoffmann - Email

import { test, expect } from '@playwright/test'

test('verify Dynamic webtable', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");

    let name: string = "Mia Hoffmann";
    let row;
    while (true) {
        row = page.locator("#employees-tbody tr").filter({ hasText: name });
        if (await row.count()) {
            const email = await row.locator("td[data-col='email']").innerText();
            console.log("Email = ", email);
            break;
        }
        const next = await page.getByTestId("next-page");
        if (await next.isDisabled()) throw new Error("Row not found!");
        await next.click();
    }
});