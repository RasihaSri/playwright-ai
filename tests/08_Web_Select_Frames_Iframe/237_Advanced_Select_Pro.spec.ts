import { test, expect } from '@playwright/test';

test('Basic Web Test - Verify Page Title', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/tables/select-boxes');

    await page.locator("#rs-single").click();
    await page.getByText("Cypress", { exact: true }).click();

    await page.locator("#rs-multiple").click();
    await page.getByText("Pytest", { exact: true }).click();
    await page.getByText("JUnit", { exact: true }).click();
    await page.keyboard.press("Escape");

    await page.locator("#rs-creatable").click();
    await page.getByText("api-testing", { exact: true }).click();
    await page.getByText("security", { exact: true }).click();
    await page.keyboard.press("Escape");

    await page.locator("#rs-async").click();
    await page.waitForSelector(".tta-rs__menu-notice");
    await page.getByText("New Delhi").click();

    await page.waitForTimeout(2000);
    

});