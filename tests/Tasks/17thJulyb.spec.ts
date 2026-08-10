//Task] 17July 2026 | Project - Web table example with OrageHRM Webtable (Find the First Terminated Employee and delete)
//https://awesomeqa.com/hr/web/index.php/auth/login
//admin
//Awesomeqa@4321


import { test, expect } from "@playwright/test";

test("two users interact", async ({ page }) => {

    page.goto("https://awesomeqa.com/hr/web/index.php/auth/login");
    await page.getByRole('textbox', { name: 'username' }).fill('admin');
    await page.getByRole('textbox', { name: "password" }).fill('Awesomeqa@4321');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.locator('.oxd-table-body')).toBeVisible();
    const rowTable = await page.locator('div.oxd-table-card');
    const rowCount = await rowTable.count();
    for (let i = 0; i < rowCount; i++) {
        const cell = await rowTable.nth(i).locator('div.oxd-table-cell').allInnerTexts();
        console.log(cell);
        if (cell.includes('Terminated')) {
            console.log(`Found Terminated Employee at row ${i + 1}`);
            await rowTable.nth(i).locator('i.oxd-icon.bi-trash').click();
            break;
        }

    }
});