import { test, expect } from '@playwright/test';

test('Basic Web Test', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/frames/multi-frames');

    let vehicleFrame = page.frameLocator("#frame-one");
    await vehicleFrame.locator('#RESULT_TextField-1').fill("Hyundai");
    await vehicleFrame.locator('#RESULT_TextField-2').fill("Pramod");
    await vehicleFrame.locator('#RESULT_TextField-3').fill("2011");
    await vehicleFrame.locator('#RESULT_RadioButton-1').selectOption('Hatchback');

    await vehicleFrame.locator('#RESULT_TextField-4').fill('2015');

    await vehicleFrame.locator('#RESULT_TextArea-1').fill('Amazing car with amazing family in budget');

    await vehicleFrame.getByText('Submit registration', { exact: true }).click();

    let output = await vehicleFrame.locator('#vehicle-output').innerText();
    console.log(output);
    await page.waitForTimeout(2000);

});