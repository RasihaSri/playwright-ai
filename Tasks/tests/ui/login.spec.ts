import { test, expect } from '@playwright/test';    
import { LoginPage } from '../../pages/LoginPage';

test('User can login successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const baseURL = 'https://staging.myapp.com'; // This should ideally come from a config file or environment variable
    await loginPage.goto(baseURL);
    await loginPage.loginAndVerify('testuser', 'password123');
    await expect(loginPage.welcomeMessage).toBeVisible();
    const welcomeText = await loginPage.getWelcomeMessage();
    expect(welcomeText).toContain('Welcome, testuser');
});

test('User cannot login with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const baseURL = 'https://staging.myapp.com';
    await loginPage.goto(baseURL);
    await loginPage.loginAndVerify('invaliduser', 'wrongpassword');
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toHaveText('Invalid username or password');
});