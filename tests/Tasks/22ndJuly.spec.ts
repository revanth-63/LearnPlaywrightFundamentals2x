//Task 22 July 2026 Hover over the Add On and Find All menu optins and click on wifi
//Find all options which are available in addon and print all options as well as click on WiFi 


import { test, expect } from "@playwright/test";
test('Hover Add-ons, print all options, and click Wifi', async ({ page }) => {
    //Navigate to page
    await page.goto("https://app.thetestingacademy.com/playwright/widgets/hover-menu");
    //Hover over Addons menu
    await page.getByTestId('nav-add-ons').hover();
    //Locate all options in dropdown
    const dropdownOptions = page.locator("//div[@data-testid='nav-add-ons']//div//a");
    //Count all options
    console.log(await dropdownOptions.count());
    //Extract text from all matched elements into an array of strings
    const optionsText = await dropdownOptions.allInnerTexts();
    //Print all options in console
    for (const itemName of optionsText) {
        console.log(itemName.trim());
    }
    //Click Wifi option
    await page.getByTestId('test-id-Wifi').click();
    //Validate output using web first assertion
    const outputLocator = page.getByTestId("hover-output");
    //This will automatically wait until element contains expected text
    await expect(outputLocator).toContainText('"testId": "test-id-Wifi"');
})