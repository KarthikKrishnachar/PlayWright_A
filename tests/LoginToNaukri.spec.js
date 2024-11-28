
import { test, expect } from '@playwright/test';

test.use({ browserName: 'chromium' });

test('name of test', async ({ page }) => {
    await page.goto('https://www.naukri.com/');


    //Locators
    const button_Login_Homepage = page.locator('xpath=//*[@id="login_Layer"]');
    const textBox_LoginEmail = page.locator('xpath=//*[@placeholder="Enter your active Email ID / Username"]');
    const textBox_LoginPassword = page.locator('xpath=//*[@placeholder="Enter your password"]');

    const button_Login_CredentialPage = page.locator('xpath=//*[@placeholder="Enter your password"]');
    //Locators

    //TestData
    var userName_email = 'karthik.krishnachar1991@gmail.com';
    var userName_password = 'meganfoxx';
    //Testdata

    if (await button_Login_Homepage.isVisible()) {
        console.log('Login button is visible');
    } else {
        console.log('Login button is not visible');
    }
    await button_Login_Homepage.click;
    await textBox_LoginEmail.clear();
    await textBox_LoginEmail.fill(userName_email);
    await textBox_LoginPassword.clear();
    await textBox_LoginPassword.fill(userName_password);
    await button_Login_CredentialPage.click;


});