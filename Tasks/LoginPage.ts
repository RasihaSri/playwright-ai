import { expect, Locator, Page } from "playwright/test";

export class LoginPage {
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly welcomeMessage: Locator;
    readonly errorMessage: Locator;
    constructor(page: Page) {
        this.page=page;
        this.username = page.getByPlaceholder('Username');
        this.password = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.welcomeMessage= page.locator("#welcome-message");
        this.errorMessage = page.locator('#error-message');
    }

    async goto(baseURL: string): Promise<void> {
        await this.page.goto(`${baseURL}/login`);
    }

    async loginAndVerify(username: string, password: string): Promise<void> {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
        await expect(this.welcomeMessage).toHaveText(`Welcome, ${username}!`);
    }

    async getWelcomeMessage(): Promise<string> {
        return await this.welcomeMessage.textContent() || '';
    }
}