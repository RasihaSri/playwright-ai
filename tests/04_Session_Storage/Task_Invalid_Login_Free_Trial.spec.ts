import { test, expect } from '@playwright/test';

test ('Verify invalid login for free trial page', async ({ page}) => {

    await page.goto (" https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage");
    await page.waitForTimeout(2000);

    await page.getByRole ("textbox", { name: "Business Email "}).fill("dsdad@gmail.com");
    await page.getByRole ("checkbox", { name: "I agree to VWO\'s Privacy" }).check();
    await page.getByRole ("button", { name: "Create a Free Trial Account" }).click();

    await expect(page.getByText("gmail.com doesn't look like a business domain. Please use your business email.")).toBeVisible();
    console.log("Error message is visible, invalid login is verified");
})