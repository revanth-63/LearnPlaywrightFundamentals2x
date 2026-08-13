// Task 20th July 2026 Dynamic DropDown LIVE Project
// https://www.spicejet.com/


import { test, expect } from '@playwright/test';
test('select start and end destination of journey using spicejet', async ({ page }) => {
    //Navigate to SpiceJet homepage
    await page.goto('https://www.spicejet.com/');
    //Click "From" (Origin) box to open city selection panel
    await page.getByTestId('to-testID-origin').click();
    await page.getByTestId('to-testID-origin').locator('input').fill("De");
    //Select 'Delhi' from opened panel
    await page.getByText('Delhi', { exact: true }).click();
    //"To" (Destination) panel opens AUTOMATICALLY on SpiceJet
    await page.getByTestId("to-testID-destination").locator("input").fill("Ban");
    await page.getByText('Bengaluru', { exact: true }).click();
    //optional to verify data
    await expect(page.getByTestId('to-testID-origin').locator('input')).toHaveValue(/Delhi/i);
    await expect(page.getByTestId('to-testID-destination').locator('input')).toHaveValue(/Bengaluru/);

})