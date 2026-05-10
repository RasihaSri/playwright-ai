import { test, expect, FrameLocator, Frame } from '@playwright/test';

test('Keyboard', async ({ page }) => {

    await page.goto('https://keycode.info/');

    await page.keyboard.press("a");
    await page.screenshot({ path: 'keycode_a.png' });
    await page.keyboard.press("ArrowLeft");
    await page.screenshot({ path: 'keycode_arrow_left.png' });
    await page.keyboard.press("Shift+0");
    await page.screenshot({ path: 'keycode_shift_0.png' });
    await page.waitForTimeout(5000);

    await page.keyboard.up("Shift");
    await page.keyboard.down("Shift");

});