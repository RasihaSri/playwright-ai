import { test, expect} from '@playwright/test';

test ('Verify employee directory in web tables', async ({ page }) => {

    await page.goto ("https://app.thetestingacademy.com/playwright/webtable/");

    await page.locator("#employee-search").fill("Kabir");

    if (await page.locator("tr:has(td:text('Kabir.Khan'))").isVisible()) {
        await page.getByRole('checkbox', { name: 'Kabir.Khan' }).click();
    }

    expect (page.locator("#selected-output")).toHaveText("Kabir.Khan");

    await page.waitForTimeout(2000);
});