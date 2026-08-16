import { test, expect, FrameLocator } from '@playwright/test';

test('Basic Web Test - Verify Page Title', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/frames/');
    let vehicleFrame: FrameLocator = await page.frameLocator("#frame-one");

    await vehicleFrame.locator('#RESULT_TextField-1').fill('Hyundai i10');
    await vehicleFrame.locator('#RESULT_TextField-2').fill('Pramod Dutta');
    await vehicleFrame.locator('#RESULT_TextField-3').fill('2012');
    await vehicleFrame.locator('#RESULT_RadioButton-1').selectOption('Hatchback');
    await vehicleFrame.locator('#RESULT_TextField-4').fill('2015');
    await vehicleFrame.locator('#RESULT_TextArea-1').fill('Amazing car with amazing family car in a budget');
    await vehicleFrame.getByText('Submit registration', { exact: true }).click();
    let output = await vehicleFrame.locator("#vehicle-output").innerText();
    console.log(output);

    // page.locator("Hi")


    await page.pause();


});