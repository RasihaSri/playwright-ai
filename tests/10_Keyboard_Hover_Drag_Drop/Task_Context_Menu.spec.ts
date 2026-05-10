import { test, expect} from '@playwright/test';

test ("Context Right Click Menu", async ({ page }) => {

    await page.goto ("https://app.thetestingacademy.com/playwright/widgets/context-menu");

    const allOptions: string[] = await page.locator('ul.context-menu-list span').allInnerTexts();
    console.log ("Context menu options: " + allOptions);

    // except paste option
    for (const option of allOptions) {
        if (option === "Paste" || option === "⌘V") continue;
        await page.locator ('span.context-menu-one').first().click({ button: 'right' });
        await page.getByRole('button', { name: `${option}` }).click();
        // expect (page.locator("#output")).toContainText(option);
        await page.keyboard.press("Escape");
    }


    await page.waitForTimeout(2000);    
});