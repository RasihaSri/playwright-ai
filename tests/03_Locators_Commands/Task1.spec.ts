import { test, expect } from '@playwright/test';

test ('Verify CURA app login', async ({ page }) => {
    await page.goto("https://katalon-demo-cura.herokuapp.com/");

    let make_Appointment = page.getByRole ("link", { name: "Make Appointment", disabled: false });

    expect(await make_Appointment.isVisible()).toBeTruthy();
    console.log("Make appointment link is visible");
    await make_Appointment.click();

    let username = page.locator("#txt-username");
    await username.fill("John Doe");
        
    let password = page.locator("#txt-password");
    await password.fill("ThisIsNotAPassword");

    let submit_btn = page.locator("#btn-login");
    await submit_btn.click();

    await expect(page.locator("h2")).toHaveText("Make Appointment");
    console.log("Login successful, heading is visible");
    
});

