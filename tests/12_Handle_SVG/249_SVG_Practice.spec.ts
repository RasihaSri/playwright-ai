import { test, expect, Locator } from '@playwright/test';

// Replace with your actual test URL containing SVG elements
const SVG_TEST_URL = 'https://app.thetestingacademy.com/playwright/widgets/svg';

test.describe('SVG Element Interactions', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(SVG_TEST_URL);
    });

    test('locate SVG root and assert visible', async ({ page }) => {

        const circleShape: Locator = page.locator('#circle-blue');
        await circleShape.first().click();

        const output = await page.locator('#shapes-output').innerText();
        expect(output).toContain("Blue circle");

        await page.getByRole('button', { name: /Q3 bar/ }).click();

        await page.getByRole('radio', { name: "4 stars" }).click();
        
        await page.waitForTimeout(2000); // Wait for any potential interactions to complete

        let allBars = await page.locator('.bar').all();
        for (const bar of allBars) {
            const q = await bar.getAttribute('data-quarter');
            await bar.click();
            console.log(q);

        }
    });
});
