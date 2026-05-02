import { test, expect } from '@playwright/test';

test ('locators are lazy, strict and auto-wait', async ({ page }) => {
    await page.goto ("https://awesomeqa.com/css/");

    const allSpans = page.locator('div.first > span');
    console.log(await allSpans.count()); // 3

    const span1 = await allSpans.first().textContent();
    const span2 = await allSpans.nth(1).textContent();
    const span3 = await allSpans.nth(2).textContent();
    const span5 = await allSpans.nth(4).textContent(); // out of bound, will not throw error, will return null
    const lastSpan = await allSpans.last().textContent();

    console.log ("First span: " + span1); // First span: 1
    console.log ("Second span: " + span2); // Second span: 2
    console.log ("Third span: " + span3);   // Third span: 3
    console.log ("Fifth span: " + span5); // Fifth span: null
    console.log ("Last span: " + lastSpan); // Last span: 3 

    for (let i = 0; i < await allSpans.count(); i++) {
        let span_ith = await allSpans.nth(i).textContent();
        console.log ("Span " + i + ": " + span_ith);
    }

});