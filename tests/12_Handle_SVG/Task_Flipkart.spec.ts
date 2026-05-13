import { test, expect, Locator } from '@playwright/test';

// Replace with your actual test URL containing SVG elements
const SVG_TEST_URL = 'https://www.flipkart.com/search';

test.describe('SVG Element Interactions', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(SVG_TEST_URL);
    });

    test('locate SVG search in Flipkart', async ({ page }) => {
        await page.locator('input[name="q"]').fill("Macmini");
        const search = page.locator('svg');
        search.first().click();

        await page.waitForTimeout(2000);

        await page.getByText("Price -- Low to High").click();

        await page.waitForTimeout(5000); // Wait for any potential interactions to complete 

        await expect(page.locator('(//div[@class="nZIRY7"]/div)[1]')).toBeVisible();

        const cheapestMacmini: Locator = page.locator("(//div[@class='nZIRY7']/div//a[2])[1]");
        await cheapestMacmini.textContent();
        console.log("Cheapest Macmini: " + await cheapestMacmini.textContent());

        const cheapestMacminiPrice: Locator = page.locator("(//div[@class='nZIRY7']/div//a[3]/div/div)[1]");
        console.log("Cheapest Macmini Price: " + await cheapestMacminiPrice.textContent());

    });
});
