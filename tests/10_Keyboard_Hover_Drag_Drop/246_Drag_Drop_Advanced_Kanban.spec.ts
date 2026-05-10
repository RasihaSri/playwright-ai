import { test, Locator, expect} from '@playwright/test';

test('Drag and Drop', async ({ page }) => {
    await page.goto ("https://app.thetestingacademy.com/playwright/widgets/dnd");

    await page.locator("#card-write-spec").dragTo(page.locator('[data-status="in-progress"]'));
    await page.locator("#card-review-pr-21").dragTo(page.locator('[data-status="in-progress"]'));
    await page.locator("#card-review-pr-21").dragTo(page.locator('[data-status="review"]'));

    // Manual mouse path - for flaky DnD libraries
    const source: Locator = page.locator("#card-review-pr-21");
    const sBox = (await source.boundingBox())!;

    const target: Locator = page.locator('[data-status="review"]');
    const tBox = (await target.boundingBox())!;


    await page.mouse.move(sBox.x + sBox.width / 2, sBox.y + sBox.height / 2);
    await page.mouse.down();
    await page.mouse.move(tBox.x + tBox.width / 2, tBox.y + tBox.height / 2, { steps: 10 });
    await page.mouse.up();

    await page.waitForTimeout(2000);


});

