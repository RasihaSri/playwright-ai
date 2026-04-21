import { chromium } from 'playwright';

async function multiUserTest() {
    // Launch the browser once
    const browser = await chromium.launch({ headless: false });

    // Admin
    let adminContext = await browser.newContext();
    let adminPage = await adminContext.newPage();
    await adminPage.goto('https://app.vwo.com/login');
    console.log('Admin logged in');

    // Viewer
    let viewerContext = await browser.newContext();
    let viewerPage = await viewerContext.newPage();
    await viewerPage.goto('https://app.vwo.com/login');
    console.log('Viewer logged in');

    await adminContext.close();
    await viewerContext.close();
    await browser.close();

}

multiUserTest();