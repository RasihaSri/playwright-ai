import { test, expect} from '@playwright/test';

test('Mouse Hover', async ({ page }) => {
    await page.goto ("https://app.thetestingacademy.com/playwright/widgets/hover-menu");

    await page.getByTestId ("nav-add-ons").hover();
    const addOnsMenu = await page.locator('[data-testid="nav-add-ons"] .submenu .submenu-item').allInnerTexts();
    console.log ("Add-ons menu items: " + addOnsMenu);
    await page.getByTestId ("test-id-Wifi").click();
    await page.keyboard.press("Escape");

    expect (page.locator("#output")).toHaveText("Wifi");


    await page.waitForTimeout(2000);


});