import { test, expect} from '@playwright/test';

test('Drag and Drop', async ({ page }) => {
    await page.goto ("https://the-internet.herokuapp.com/drag_and_drop");

    const columnA = page.locator("#column-a");
    const columnB = page.locator("#column-b");

    // verify initial state
    await expect(columnA).toHaveText("A");
    await expect(columnB).toHaveText("B");

    await page.waitForTimeout(2000);

    await columnA.dragTo(columnB);

    // verify final state
    await expect(columnA).toHaveText("B");
    await expect(columnB).toHaveText("A");

    await page.waitForTimeout(2000);

});

