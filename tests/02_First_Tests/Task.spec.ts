// Scenario 1: One Browser → Multiple Contexts → Multiple Pages

// 👉 Use case: simulate multiple users (independent sessions)

// 📁 MultiContextTest.spec.ts
import { test, chromium, Browser, BrowserContext, Page } from "@playwright/test";

test("Multiple contexts with multiple pages", async () => {
    const browser: Browser = await chromium.launch({ headless: false });

    // Context 1 (User A)
    const context1: BrowserContext = await browser.newContext();
    const page1: Page = await context1.newPage();
    const page2: Page = await context1.newPage();

    await page1.goto("https://example.com");
    await page2.goto("https://google.com");

    // Context 2 (User B)
    const context2: BrowserContext = await browser.newContext();
    const page3: Page = await context2.newPage();
    const page4: Page = await context2.newPage();

    await page3.goto("https://github.com");
    await page4.goto("https://playwright.dev");

    await browser.close();
});
// 🔍 What you're practicing here
// One browser instance
// Multiple isolated sessions (contexts)
// Each context has its own cookies/storage
// Multiple tabs per context
// 🧪 Scenario 2: Same Context → Multiple Pages

// 👉 Use case: simulate same user opening multiple tabs

// 📁 MultiPageSameContext.spec.ts
// import { test, chromium, Browser, BrowserContext, Page } from "@playwright/test";

test("Same context with multiple pages", async () => {
    const browser: Browser = await chromium.launch({ headless: false });

    const context: BrowserContext = await browser.newContext();

    const page1: Page = await context.newPage();
    const page2: Page = await context.newPage();
    const page3: Page = await context.newPage();

    await page1.goto("https://example.com");
    await page2.goto("https://google.com");
    await page3.goto("https://bing.com");

    // Example interaction
    console.log(await page1.title());
    console.log(await page2.title());
    console.log(await page3.title());

    await browser.close();
});
// 🔍 What you're practicing here
// One browser
// One session (shared cookies/login)
// Multiple tabs (pages)
// Useful for:
// Chat apps
// Multi-tab workflows
// Comparing data across tabs