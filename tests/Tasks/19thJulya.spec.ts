// Task 19th July 2026 | Project Static Table
// Task 1 Yoshi - Which Country

import { test, expect } from '@playwright/test'

test('verify static webtable', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");

    // xpath = //table[@id='companies-table']/tbody/tr/td
    const firstpart = "//table[@id='companies-table']/tbody/tr[";
    const secondpart = "]/td[";
    const thridpart = "]";
    const rowcount = await page.locator("//table[@id='companies-table']/tbody/tr").count();
    console.log(rowcount);
    const colmcount = await page.locator("//table[@id='companies-table']/tbody/tr[1]/td").count();
    console.log(colmcount);
    for (let i = 1; i <= rowcount; i++) {
        for (let j = 1; j <= colmcount; j++) {
            const eachtext = await page.locator(`${firstpart}${i}${secondpart}${j}${thridpart}`).allInnerTexts();
            const row = await page.locator(`${firstpart}${i}${secondpart}${j}${thridpart}`);
            console.log(eachtext);
            if (eachtext.includes("Yoshi Tannamuri")) {
                console.log("text match");
                const countryxpath = "/following-sibling::td";
                const country = await page.locator(`${firstpart}${i}${secondpart}${j}${thridpart}${countryxpath}`).innerText();
                console.log(country);
                await page.waitForTimeout(3000);
            }
        }
    }
});