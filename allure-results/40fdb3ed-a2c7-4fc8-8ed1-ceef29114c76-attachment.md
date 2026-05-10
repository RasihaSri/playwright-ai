# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 09_Frames_IFrames\239_iframe.spec.ts >> Basic Web Test
- Location: tests\09_Frames_IFrames\239_iframe.spec.ts:3:5

# Error details

```
Error: locator.fill: Test ended.
Call log:
  - waiting for locator('#frame-one').contentFrame().locator('RESULT_TextField-1')

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Basic Web Test', async ({ page }) => {
  4  | 
  5  |     await page.goto('https://app.thetestingacademy.com/playwright/frames/');
  6  | 
  7  |     let vehicleFrame = await page.frameLocator("#frame-one");
> 8  |     vehicleFrame.locator('RESULT_TextField-1').fill("Hyundai");
     |                                                ^ Error: locator.fill: Test ended.
  9  |     vehicleFrame.locator('RESULT_TextField-2').fill("Pramod");
  10 |     vehicleFrame.locator('RESULT_TextField-3').fill("2011");
  11 |     vehicleFrame.locator('RESULT_RadioButton-1').selectOption('Hatchback');
  12 | 
  13 |     vehicleFrame.locator('RESULT_TextField-4').fill('2015');
  14 | 
  15 |     vehicleFrame.locator('#RESULT_TextArea-1').fill('This is a test for frames and iframes');
  16 | 
  17 |     await page.waitForTimeout(2000);
  18 | 
  19 | });
```