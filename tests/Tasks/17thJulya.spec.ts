//Task 17 July 2026 | Project # Automate the Login for the Student
//Verify the URL is changed with your username and password
//https://app.thetestingacademy.com/playwright/multiple_element_filter?email=addasda%40adsd.com&password=dasdadasda&remember=yes#login-success
import { test, expect } from "@playwright/test";

test("two users interact", async ({ page }) => {

    page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    await page.getByPlaceholder('student@thetestingacademy.com').fill('abc@gmail.com');
    await page.getByPlaceholder('Enter your password').fill('abc');
    await page.getByRole('checkbox', { name: 'Remember me' }).check();
    await page.getByRole('button', { name: 'Login to Practice Account' }).click();
    await expect(page).toHaveURL(/multiple_element_filter\?email=.*&password=.*#login-success/);

});