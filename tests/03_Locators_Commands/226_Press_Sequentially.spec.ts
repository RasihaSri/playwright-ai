import { test, expect } from '@playwright/test';

test ('locators are lazy, strict and auto-wait', async ({ page }) => {
    await page.goto ("https://awesomeqa.com/practice.html");
    const input_firstname = page.locator('input[name="firstname"]');
    await input_firstname.pressSequentially("Rasiha", { delay : 200 });

    await page.waitForTimeout(2000);

    await page.goto ("https://app.vwo.com/login/");
    await page.goBack();
    await page.waitForTimeout(2000);

});