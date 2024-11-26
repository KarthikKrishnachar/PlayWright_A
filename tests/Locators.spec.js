
//const { test, expect } = require('@playwright\test')
import { test, expect } from '@playwright/test'


test('validateLocators', async ({ page }) => {

    await page.goto('https://demoblaze.com/');
    // to click on element we can use either one method
    await page.locator('id=login2').click()
    //or
    //await page.click('')
    await page.locator('#loginusername').fill("usernamekarthik")
    await page.locator("//*[@id='loginpassword']").fill("usernamekarthik")

    const loginButton = await page.locator("//button[normalize-space()='Log in']")

    console.log(expect(loginButton).toBeVisible());
    await expect(loginButton).toBeVisible();

    await page.close();
}); 