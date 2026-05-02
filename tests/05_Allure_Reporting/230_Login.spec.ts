import { test, expect } from '@playwright/test';
import * as allure from "allure-js-commons";

test ('Verify that the login works', async ({ page }) => {

    await allure.epic ("VWWO Login Tests");
    await allure.description ("This test verifies that the login functionality works as expected");
    await allure.feature ("Essential Features");
    await allure.story ("authentication");

    await page.goto ("https://app.vwo.com/#login/");
    await page.waitForTimeout(1000);
    await page.fill('#login-username', 'opg73@singleemail.site');
    await page.fill('#login-password', 'Wingify@4321');
    await page.waitForTimeout(2000);

    await page.click('#login-btn');
    //Wait for login to actually complete before snapshotting storage - 
    // otherwise the auth cookie 
    await page.waitForURL('/#\/(dashboard|home)/', { timeout: 5000 });
    await page.waitForTimeout(2000);

    await expect(page).toHaveTitle('Dashboard');

});