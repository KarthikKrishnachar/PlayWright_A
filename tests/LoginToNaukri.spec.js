
import { test, expect } from '@playwright/test';

test.use({ browserName: 'chromium' });

test('name of test', async ({ page }) => {
    await page.goto('https://www.naukri.com/');


    // const loginButton_locator = page.locator('xpath=//*[@id="login_Layer"]');
    const loginButton_locator = page.locator('xpath=//*[@id="login_Layer"]');

    await page.click('xpath=//*[@id="login_Layer"]');

});