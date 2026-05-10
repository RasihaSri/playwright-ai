import { test, expect } from '@playwright/test';

test ('locators are lazy, strict and auto-wait', async ({ page, context }) => {
    await page.goto ("https://awesomeqa.com/practice.html");
    await page.locator('[name="firstname"]').pressSequentially("Rasiha", { delay : 200 });

    await page.waitForTimeout(2000);
    await page.goto ("https://app.vwo.com/login/");
    // Read all cookies
    let cookies = await context.cookies();
    console.log("All cookies:", cookies);

    await context.addCookies([
        {
            name: "vwo",
            value: "1234567890",
            domain: "app.vwo.com",
            path: "/"
        },
        {
            name: "user_role",
            value: "admin",
            domain: "app.vwo.com",
            path: "/"
        }
    ]);


        // await context.clearCookies();

    console.log ("Total length of cookies: " + (await context.cookies()).length);
    cookies.forEach(function (cookie) {
        console.log("  " + cookie.name + " = " + cookie.value);
    });

    await page.goBack();
    await page.waitForTimeout(2000);        
}); 