import { test, expect, Locator } from '@playwright/test';

// Replace with your actual test URL containing SVG elements
const SVG_TEST_URL = 'https://www.flipkart.com/search/';

test.describe('SVG Element Interactions', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(SVG_TEST_URL);
    });

    test('locate SVG root and assert visible', async ({ page }) => {

        // Example: Select the first SVG element on the page
        await page.locator('input[name="q"]').fill("Macmini");
        const svgElement: Locator = page.locator('svg');
        await svgElement.first().click();

        // const svgElementAll: Locator[] = await page.locator('svg').all();
        // console.log(svgElementAll);
        // console.log("Total SVG elements found: " + svgElementAll.length);
        // for (let svgElement in svgElementAll) {
        //     console.log(svgElement);
        // }

        const firstResult = page.locator('//div[contains(@data-id, "CPU")]/div/a[2]');
        await expect (firstResult.first()).toBeVisible( {timeout: 5000} );

        const titlesResults: Locator = page.locator(
            '//div[contains(@data-id, "CPU") or contains(@data-id, "MP")]/div/a[2]');
        const count = await titlesResults.count();
        console.log("Total titles found: " + count);
        for (let i = 0; i < count; i++) {
            const title: string | null = await titlesResults.nth(i).textContent();
            console.log(title?.trim());
        }

        await page.waitForTimeout(2000); // Wait for any potential interactions to complete
        
    });
});
