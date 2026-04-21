import { chromium, Browser, BrowserContext, Page } from 'playwright';

async function run() {
    // LEVEL 1: Launch the browser - heaviest operation, do it once
    const browser: Browser = await chromium.launch({ headless: false });
    console.log('Browser launched', browser);

    // LEVEL 2: Create a browser context - lightweight, can be done per test - Fresh session, no cookies, localStorage, etc.
    const context: BrowserContext = await browser.newContext();
    console.log('Browser context created', context);

    // LEVEL 3: Open page - a tab inside the context
    const page: Page = await context.newPage();
    console.log('Page opened', page);

    await page.goto('https://example.com');
    console.log("title:", await page.title());

    // Cleanup - reverse order
    await page.close();
    await context.close();
    await browser.close();
}
