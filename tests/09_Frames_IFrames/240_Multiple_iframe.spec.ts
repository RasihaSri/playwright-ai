import { test, expect, FrameLocator, Locator, Frame } from '@playwright/test';

test('Basic Web Test', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/frames/multi-frames');

    let mainFrame:FrameLocator = page.frameLocator('[name="main"]');
    const headerText = await mainFrame.locator('h2').innerText();
    console.log(headerText);

    await page.waitForTimeout(5000);

    // total number of <frame> elements in the page
    const allFrames:Locator[] = await page.locator('//frame').all();
    console.log("Total number of frames: " + allFrames.length);

    for (const frame of allFrames) {
        console.log(await frame.getAttribute('name'), ': ', await frame.getAttribute('src'));
    }   

    let sideFrame: FrameLocator = page.frameLocator('[name="side"]');
    await sideFrame.getByTestId('side-link-registration').click();

    await page.waitForTimeout(5000);

});