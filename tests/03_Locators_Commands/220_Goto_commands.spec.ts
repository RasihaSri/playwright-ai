import { test, expect } from "@playwright/test";

test ("simple goto - uses load by default", async ({ page }) => {
    // No waitUntil specified, so it defaults to "load"
    await page.goto("https://www.app.vwo.com");

    const title = await page.title();
    console.log("Page title:", title);

    await expect(page).toHaveTitle("Login-VWO");
    console.log("URL Verified")
});

test ("navigate with custom referer", async ({ page }) => {
    // Tell the server "user came from Google"
    await page.goto("https://app.com/landing", {
        referer: "https://google.com/search?q=testing+academy"
    });

    console.log("Page loaded with Google as referer");
    console.log("URL:", page.url());
});