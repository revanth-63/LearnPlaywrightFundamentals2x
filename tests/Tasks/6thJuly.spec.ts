//Task 6 July 2026 | Playwright Browser, Context, Page.
//you need to create a test that opens a browser, creates a new context, and opens a new page. Then navigate to a website mentioned in context 1 and context 2 and perform some basic interactions like clicking a button or filling out form. Finally, close the page, context, and browser.
//Browser
//Context - 1 - https://app.thetestingacademy.com/playwright/ttacart/
//Context - 2 - https://tta-bank-digital-973242068062.us-west1.run.app/

import { test } from "@playwright/test";

test("Multi Context Test", async ({ browser }) => {

    // Context 1
    const context1 = await browser.newContext();
    const page1 = await context1.newPage();

    await page1.goto(
        "https://app.thetestingacademy.com/playwright/ttacart/"
    );

    console.log("successfully opened context 1");

    // Context 2
    const context2 = await browser.newContext();
    const page2 = await context2.newPage();

    await page2.goto(
        "https://tta-bank-digital-973242068062.us-west1.run.app/"
    );

    console.log("successfully opened context 2");

    await context1.close();
    await context2.close();
});