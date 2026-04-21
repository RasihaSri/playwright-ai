import { test, expect } from '@playwright/test';

test ('context with options', async ({ browser }) => {
    const context = await browser.newContext({
        viewport: { width: 1920, height: 1080 },
        locale: 'fr-FR',
        timezoneId: 'Europe/Paris',
        geolocation: { latitude: 48.8566, longitude: 2.3522 },
        permissions: ['geolocation']
    });

    const page = await context.newPage();
    await page.goto('https://app.vwo.com/#login');

    await context.close();
});

test ('context with storage state', async ({ browser }) => {
    const context = await browser.newContext({
        storageState: {
            cookies: [
                {
                    name: 'session',
                    value: '123456',
                    domain: 'app.vwo.com',
                    path: '/',
                    expires: Math.floor(Date.now() / 1000) + 3600, // expires in 1 hour
                    httpOnly: true,
                    secure: true,
                    sameSite: 'Lax'
                }
            ],
            origins: []
        }
    });
     const page = await context.newPage();
        
    await context.close();
});



test('mobile context', async ({ browser }) => {
    const iPhone = {
        viewport: { width: 375, height: 667 },
        userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X)',
        deviceScaleFactor: 2,
        isMobile: true,
        hasTouch: true,
    };
    
    const context = await browser.newContext(iPhone);
    const page = await context.newPage();
    
    await page.goto('https://playwright.dev');
    
    await context.close();
});

// Scenario 1: Context with HTTP Credentials

test('context with HTTP auth', async ({ browser }) => {
    const context = await browser.newContext({
        httpCredentials: {
            username: 'user',
            password: 'pass',
        }
    });
    
    const page = await context.newPage();
    await page.goto('https://the-internet.herokuapp.com/basic_auth');
    // Will auto-authenticate for HTTP Basic Auth
    
    await context.close();
});

// Incognito-like Context
test('fresh context like incognito', async ({ browser }) => {
    // Each newContext() is like incognito
    // No shared cookies, localStorage, etc.
    
    const context1 = await browser.newContext();
    const context2 = await browser.newContext();
    
    // These are completely isolated
    const page1 = await context1.newPage();
    const page2 = await context2.newPage();
    
    await context1.close();
    await context2.close();
});

// **Context Events**
test('context events', async ({ browser }) => {
    const context = await browser.newContext();
    
    // Listen for new pages
    context.on('page', page => {
        console.log('New page opened:', page.url());
    });
    
    const page = await context.newPage();
    await page.goto('https://playwright.dev');
    
    await context.close();
});