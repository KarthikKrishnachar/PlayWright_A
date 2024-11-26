import { test, expect } from "@playwright/test";

test('locateAllElements', async ({ page }) => {

    await page.goto('https://demoblaze.com/');

    const productNames = await page.$$("//*[@class='hrefch']");

    for (const productName of productNames) {

        console.log(await productName.textContent());

    }


    await page.close();


});

