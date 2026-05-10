import { test, expect, FrameLocator, Frame } from '@playwright/test';

test('Hover to Fly Early', async ({ page }) => {

    await page.goto('https://spicejet.com/');

    await page.getByText ("Add-ons: { exact: true }").hover();
    await page.getByText ("Fly Early: { exact: true }").click();

    await page.waitForTimeout(5000);

});