import { test, expect } from '@playwright/test';

test('Basic Web Test - Verify Page Title', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/dropdown');

    await page.locator("#dropdown").click();
    // await page.getByText("Option 1", { exact: true }).click();

    // await page.selectOption("#dropdown", "Option 1");
    
    await page.locator ("#dropdown").selectOption("Option 2");


    await page.waitForTimeout(2000);
    

});