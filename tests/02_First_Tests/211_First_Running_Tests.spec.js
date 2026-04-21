// Creating your first Playwright test

// - Test structure
// - Basic assertions
// - Navigations
// - Element interactions

import { test, expect } from '@playwright/test';

test('Verify your first test', async ({ page }) => {
    await page.goto('https://app.vwo.com/');
    await expect(page).toHaveTitle('Login - VWO');
    const img_vo = page.locator('img');
    await expect(img_vo).toBeVisible();
});