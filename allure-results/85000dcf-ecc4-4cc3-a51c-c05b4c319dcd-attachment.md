# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 09_Frames_IFrames\240_Multiple_iframe.spec.ts >> Basic Web Test
- Location: tests\09_Frames_IFrames\240_Multiple_iframe.spec.ts:3:5

# Error details

```
Error: locator.innerText: Test ended.
Call log:
  - waiting for locator('[name="main"]').contentFrame().locator('h2')

```

# Test source

```ts
  1  | import { test, expect, FrameLocator, Frame } from '@playwright/test';
  2  | 
  3  | test('Basic Web Test', async ({ page }) => {
  4  | 
  5  |     await page.goto('https://app.thetestingacademy.com/playwright/frames/');
  6  | 
  7  |     let mainFrame:FrameLocator = page.frameLocator('[name="main"]');
> 8  |     const headerText = await mainFrame.locator('h2').innerText();
     |                                                      ^ Error: locator.innerText: Test ended.
  9  |     console.log(headerText);
  10 | 
  11 |     await page.waitForTimeout(5000);
  12 | 
  13 |     // total number of <frame> elements in the page
  14 |     const allFrames:Locator[] = page.locator('//frame').all();
  15 |     console.log("Total number of frames: " + allFrames.length);
  16 | 
  17 |     for (const frame of allFrames) {
  18 |         console.log(await frame.getAttribute('name'), ': ', await frame.getAttribute('src'));
  19 |     }   
  20 | 
  21 |     let sideFrame: FrameLocator = page.frameLocator('[name="side"]');
  22 |     // await sideFrame.getByTestId()
  23 | });
```