/// <reference types="@playwright/test" />
import { test, expect, Page } from '@playwright/test';

test.skip('skipped test', async ({ page }) =>  {
    //test is skipped
});

test.only('focused test', async ({ page }) =>  {
    //only this test will run
});

// Mark as failing
test.fail('failed test', async ({ page }) =>  {
    //test is expected to fail
});

// test('slow test', async ({ page }) =>  {
    //test is expected to be slow, has extended timeout
//     await page.waitForTimeout(5000);
// }, { timeout: 10000 });

// Conditional skip
test('conditional', async ({ page, browserName }) =>  {
    test.skip(browserName === 'firefox', 'Not supported on Firefox');
    //test will be skipped on Firefox
});