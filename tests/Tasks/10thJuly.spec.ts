//Task 10 July 2026 | Find the XPath relative, specially for this page
//https://katalon-demo-cura.herokuapp.com/


// The Relative Xpath for the given pages
// Make Appointment - //a[@id='btn-make-appointment']
// Username - //input[@id='txt-username']
// Password - //input[@id='txt-password']
// Facility drop down - //select[@id ='combo_facility']
// Apply for hospital readmission checkbox - //input[@id ='chk_hospotal_readmission']
// Healthcare Program
// Medicare Radio button - //input[@id ='radio_program_medicare']
// Medicaid Radio button - //input[@id ='radio_program_medicaid']
// None - //input[@id ='radio_program_none']
// Visit Date(Required) - //input[@id ='txt_visit_date']
// Comment - //textarea[@id ='txt_comment']
// Book Appointment - //button[@id ='btn-book-appointment']


import { test, expect } from '@playwright/test';

test("Katalon Cura Relative XPath Task", async ({ page }) => {

    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    let appointmentButton = page.locator('//a[@id="btn-make-appointment"]');
    await appointmentButton.click();

    let usernameField = page.locator('//input[@id="txt-username"]')
    await usernameField.fill('John Doe')

    let passwordField = page.locator('//input[@id="txt-password"]')
    await passwordField.fill('ThisIsNotAPassword')

    let loginButton = page.locator('//button[@id="btn-login"]')
    await loginButton.click()

    // await page.waitForTimeout(5000);
    page.on('dialog', async (dialog) => {
        const message = dialog.message();
        if (message.includes('The password you just used was found in a data breach')) {
            await dialog.dismiss();
        } else {
            await dialog.accept();
        }
    })
    let facilityDropdown = page.locator('//select[@id="combo_facility"]');
    await facilityDropdown.selectOption('Tokyo CURA Healthcare Center');

    let checkbox = page.locator('//input[@id="chk_hospotal_readmission"]');
    await expect(checkbox).not.toBeChecked();

    let programRadioOption = page.locator('//input[@id="radio_program_medicare"]');
    await expect(programRadioOption).toHaveValue("Medicare");

    let visitDateField = page.locator('//input[@id="txt_visit_date"]');
    await visitDateField.fill("10/07/2026");

    let commentField = page.locator('//textarea[@id="txt_comment"]');
    commentField.fill("first time admission");

    let bookAppointmentButton = page.locator('//button[@id="btn-book-appointment"]');
    await page.waitForTimeout(3000);

});