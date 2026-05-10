# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 09_Frames_IFrames\Task_Iframe.spec.ts >> Practice multiple frames
- Location: tests\09_Frames_IFrames\Task_Iframe.spec.ts:24:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('[name="side"]').contentFrame().locator('#RESULT_TextField-1')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic "Side frame · The Testing Academy" [active] [ref=e2]
  - generic [ref=e3]:
    - generic "Main frame · The Testing Academy" [ref=e4]
    - generic "Footer frame · The Testing Academy" [ref=e5]
```

# Test source

```ts
  1  | import { test, FrameLocator, Locator, expect} from '@playwright/test';
  2  | 
  3  | test ('Practice single frame, multiple frames and nested frames', async ({ page }) => {
  4  | 
  5  |     await page.goto ("https://app.thetestingacademy.com/playwright/frames/");
  6  | 
  7  |     let vehicleFrame = page.frameLocator("#frame-one");
  8  |     await vehicleFrame.locator("#RESULT_TextField-1").fill("Tata Nexon");
  9  |     await vehicleFrame.locator("#RESULT_TextField-2").fill("Rasiha");
  10 |     await vehicleFrame.locator("#RESULT_TextField-3").fill("TN 01 RS 2905");
  11 |     await vehicleFrame.locator("#RESULT_RadioButton-1").selectOption("Hatchback");
  12 |     await vehicleFrame.locator("#RESULT_TextField-4").fill("2026");
  13 | 
  14 |     await vehicleFrame.locator("#RESULT_TextArea-1").fill("Vehicle has amazing features");
  15 |     await vehicleFrame.getByText("Submit registration", { exact: true }).click();
  16 | 
  17 |     let output = await vehicleFrame.locator("#vehicle-output").innerText();
  18 |     console.log(output);
  19 | 
  20 |     await page.waitForTimeout(2000);
  21 | 
  22 | });
  23 | 
  24 | test ('Practice multiple frames', async ({ page }) => {
  25 | 
  26 |     await page.goto ("https://app.thetestingacademy.com/playwright/frames/multi-frames");
  27 | 
  28 |     let mainFrame:FrameLocator = page.frameLocator('[name="main"]');
  29 |     const headerText = await mainFrame.locator('h2').innerText();
  30 |     console.log(headerText);
  31 | 
  32 |     const allFrames:Locator[] = await page.locator('//frame').all();
  33 |     console.log("Total number of frames: " + allFrames.length);
  34 | 
  35 |     let sideFrame: FrameLocator = page.frameLocator('[name="side"]');
  36 |     await sideFrame.getByTestId('side-link-registration').click();
  37 | 
> 38 |     await mainFrame.locator('#RESULT_TextField-1').fill("Hyundai");
     |                                                    ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  39 |     await mainFrame.locator('#RESULT_TextField-2').fill("Pramod");
  40 |     await mainFrame.locator('#RESULT_TextField-3').fill("2011");
  41 |     await sideFrame.locator('#RESULT_RadioButton-1').selectOption('Hatchback');
  42 | 
  43 |     await sideFrame.locator('#RESULT_TextField-4').fill('2015');
  44 | 
  45 |     await sideFrame.locator('#RESULT_TextArea-1').fill('Amazing car with amazing family in budget');
  46 | 
  47 |     await sideFrame.getByText('Submit registration', { exact: true }).click();
  48 | 
  49 |     await sideFrame.getByTestId('side-link-footer').click();
  50 |     let footerFrame = page.frameLocator('[name="footer"]');
  51 |     await expect(footerFrame.locator('strong')).toContainText("The Testing Academy");
  52 | 
  53 |     await page.waitForTimeout(2000);
  54 | 
  55 | });
  56 | 
  57 | test ('Practice nested frames', async ({ page }) => {
  58 |     await page.goto('https://app.thetestingacademy.com/playwright/frames/nested-iframes');
  59 | 
  60 |     let frame1: FrameLocator = page.frameLocator('iframe#pact1');
  61 |     let frame2: FrameLocator = frame1.frameLocator('iframe#pact2');
  62 |     let frame3: FrameLocator = frame2.frameLocator('iframe#pact3');
  63 | 
  64 |     // To enter the value in the First Level, we use frame1
  65 |     await frame1.locator('#inp_val').fill('Testing');
  66 | 
  67 |     // To enter the value in the Second Level, we use frame2
  68 |     await frame2.locator('#jex').fill('Selenium');
  69 | 
  70 |     // To enter the value in the Third Level, we use frame3
  71 |     await frame3.locator('#glaf').fill('Playwright');
  72 | 
  73 |     // To fetch the value from h3, we directly use page and as we have 2 occurances we used first()
  74 |     const headerText = await page.locator('h3').first().innerText();
  75 |     console.log(headerText);
  76 | 
  77 |     await page.waitForTimeout(2000);
  78 | });
```