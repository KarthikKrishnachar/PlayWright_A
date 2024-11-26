//@ts-check
const { test, expect } = require('@playwright/test')

test('home page', async ({ page }) => {

    await page.goto('https://demoblaze.com/');

    const pageTitle = await page.title();

    console.log('the page title is this ', pageTitle);

    await expect(page).toHaveTitle('STORE');

    await page.close;
});