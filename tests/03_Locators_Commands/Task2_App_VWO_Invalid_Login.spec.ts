import { test, expect } from '@playwright/test';

test ('Verify error message when invalid credentials are used in VWO app', async ({ page }) => {
    await page.goto("https://app.vwo.com/#login");

    let emailID = page.getByRole ("textbox", { name: "Email address" });
    let password = page.getByRole ("textbox", { name: "Password" });
    let sign_in_btn = page.getByRole ("button", { name: "Sign in", exact: true });

    await emailID.fill("Invalid admin");
    await password.fill("Invalid pass123");
    await sign_in_btn.click();
    let error_message = page.locator('#js-notification-box-msg');
    await expect(error_message).toContainText("Your email, password, IP address or location did not match");
    
});

