import { test, expect, Locator } from '@playwright/test';

const URL = 'https://selectorshub.com/xpath-practice-page/'; // replace with target page

test.describe('Shadow handling', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(URL);
    });

    test('locate Shadow DOM and assert visible', async ({ page }) => {

        // shadow root (open)
        await page.waitForTimeout(2000);
        const card = page.locator('.jackPart');
        await card.getByTitle("user name field").fill('Rasiha');
        await card.getByPlaceholder("Enter pizza name").fill('Dominos');

        // If the shadow root is "closed," Playwright (and most browser automation tools) 
        // cannot pierce it directly, and these selectors would not work. 
        // If the shadow root is "open," Playwright can access its elements as shown.
        // shadow root (closed)
        // await page.locator("#training").fill('Playwright');
        // await page.getByTitle("user password field").fill('password123');

        await page.keyboard.press('Tab');
        await page.keyboard.type('Concept Test - Shadow DOM Hidden Element');
        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab');
        await page.keyboard.type('password123');

        await page.getByText('Click to practice iframe inside shadow dom scenario').click();

        await page.waitForTimeout(5000);

    });
});
