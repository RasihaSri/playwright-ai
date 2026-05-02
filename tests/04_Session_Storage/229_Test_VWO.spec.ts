import { test, expect } from '@playwright/test';

// Load saved session - already logged in
test.use ({
    storageState: './user-session.json'
});

test ("go directly to dashboard - no login", async ({ page }) => {
    await page.goto ("https://app.vwo.com/#dashboard");
    await expect (page).toHaveURL("/dashboard/");
    console.log ("Dashboard loaded - no login needed");

});

test ("go directly to settings - no login", async ({ page }) => {
    await page.goto ("https://app.vwo.com/#settings");
    await expect (page).toHaveURL("/settings/");
    console.log ("Settings loaded - still logged in");
});
