import { test, expect } from '@playwright/test';

test.describe ('Multiple Elements Handling', () => {

    test ('Basic Test - Verify page title', async ({ page }) => {
        // Navigate to a sample page
        await page.goto ("https://app.thetestingacademy.com/playwright/multiple_element_filter");
        const rightPanelLinksTexts: string[] = await page.locator ('a.list-group-item').allInnerTexts();
        console.log ("Links in the right panel: " + rightPanelLinksTexts);
        console.log ("Total number of links in the right panel: " + rightPanelLinksTexts.length);

        for (const linkText of rightPanelLinksTexts) {
            if (linkText === "My Account") {
                await page.getByText(linkText).first().click();
                break;
            }
        }

        const rightPanelLinks = page.locator ('a.list-group-item').all();
        for (const link of await rightPanelLinks) {
            console.log (await link.getAttribute('href'));
        }
    });

});