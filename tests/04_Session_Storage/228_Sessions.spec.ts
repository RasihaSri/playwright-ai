import { chromium } from 'playwright';

async function saveSession () {
    let browser = await chromium.launch();
    let context = await browser.newContext();
    let page = await context.newPage();

    await page.goto ("https://app.vwo.com/#login/");
    await page.fill('#login-username', "opg73@singleuseemail.site");
    await page.fill("#login-password", "Wingify@4321");
    await page.click('#login-btn');
    await page.waitForTimeout(2000);

    await context.storageState({ path: "./auth/user-session.json" });
    console.log ("Session saved to admin:user-session.json");

    await browser.close();
}