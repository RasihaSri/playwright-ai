import { test, FrameLocator, Locator, expect} from '@playwright/test';

test.describe('Frames and IFrames Practice', () => {

    test ('Practice single frame', async ({ page }) => {

        await page.goto ("https://app.thetestingacademy.com/playwright/frames/");

        let vehicleFrame = page.frameLocator("#frame-one");
        await vehicleFrame.locator("#RESULT_TextField-1").fill("Tata Nexon");
        await vehicleFrame.locator("#RESULT_TextField-2").fill("Rasiha");
        await vehicleFrame.locator("#RESULT_TextField-3").fill("TN 01 RS 2905");
        await vehicleFrame.locator("#RESULT_RadioButton-1").selectOption("Hatchback");
        await vehicleFrame.locator("#RESULT_TextField-4").fill("2026");

        await vehicleFrame.locator("#RESULT_TextArea-1").fill("Vehicle has amazing features");
        await vehicleFrame.getByText("Submit registration", { exact: true }).click();

        let output = await vehicleFrame.locator("#vehicle-output").innerText();
        console.log(output);

        await page.waitForTimeout(2000);

    });

    test ('Practice multiple frames', async ({ page }) => {

        await page.goto ("https://app.thetestingacademy.com/playwright/frames/multi-frames");

        let mainFrame:FrameLocator = page.frameLocator('[name="main"]');
        const headerText = await mainFrame.locator('h2').innerText();
        console.log(headerText);

        const allFrames:Locator[] = await page.locator('//frame').all();
        console.log("Total number of frames: " + allFrames.length);

        let sideFrame: FrameLocator = page.frameLocator('[name="side"]');
        await sideFrame.getByTestId('side-link-registration').click();

        await mainFrame.locator('#RESULT_TextField-1').fill("Hyundai");
        await mainFrame.locator('#RESULT_TextField-2').fill("Pramod");
        await mainFrame.locator('#RESULT_TextField-3').fill("2011");
        await mainFrame.locator('#RESULT_RadioButton-1').selectOption('Hatchback');

        await mainFrame.locator('#RESULT_TextField-4').fill('2015');

        await mainFrame.locator('#RESULT_TextArea-1').fill('Amazing car with amazing family in budget');

        await mainFrame.getByText('Submit registration', { exact: true }).click();

        await sideFrame.getByTestId('side-link-footer').click();
        let footerFrame = page.frameLocator('[name="footer"]');
        await expect(footerFrame.locator('strong')).toContainText("The Testing Academy");

        await page.waitForTimeout(2000);

    });

    test ('Practice nested frames', async ({ page }) => {
        await page.goto('https://app.thetestingacademy.com/playwright/frames/nested-iframes');

        let frame1: FrameLocator = page.frameLocator('iframe#pact1');
        let frame2: FrameLocator = frame1.frameLocator('iframe#pact2');
        let frame3: FrameLocator = frame2.frameLocator('iframe#pact3');

        // To enter the value in the First Level, we use frame1
        await frame1.locator('#inp_val').fill('Testing');

        // To enter the value in the Second Level, we use frame2
        await frame2.locator('#jex').fill('Selenium');

        // To enter the value in the Third Level, we use frame3
        await frame3.locator('#glaf').fill('Playwright');

        // To fetch the value from h3, we directly use page and as we have 2 occurances we used first()
        const headerText = await page.locator('h3').first().innerText();
        console.log(headerText);

        await page.waitForTimeout(2000);
    });

});