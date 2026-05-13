import { test, expect, Locator } from '@playwright/test';

// Replace with your actual test URL containing SVG elements
const SIMPLE_MAPS_URL = 'https://simplemaps.com/svg/country/in';

test.describe('SVG Element Interactions', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(SIMPLE_MAPS_URL);
        await page.waitForTimeout(2000); // Wait for the SVG map to load
        await page.setViewportSize({ width: 1920, height: 1080 });
    });

    test('locate India SVG Maps', async ({ page }) => {
        const key = "Uttar Pradesh";

        const allStates = page.locator('//div[@id="admin1_map_inner"]//*[name()="svg"]//*[name()="text"]');
        console.log("All States: " + await allStates.allTextContents());

        const count = await allStates.count();
        for (let i = 0; i < count; i++) {
            const state = allStates.nth(i);
            const text = await state.textContent();
            if (text &&text.trim() === key) {
                await page.locator('(//*[name()="path" and contains(@class,"INUP")])').click();
            }
        }

    });
});
