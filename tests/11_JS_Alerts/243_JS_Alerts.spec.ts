import { test, expect, FrameLocator, Frame } from '@playwright/test';

test.describe('Javascript Alerts', () => {

    // Group the test cases together
    test.beforeEach (async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    });

    test('JS Alerts Accept 1', async ({ page }) => {

        // Register the dialog handler BEFORE triggering the alert

        page.once ('dialog', async dialog => {
            console.log('Alert type: ' + dialog.type());
            expect (dialog.type()).toBe('alert');
            console.log('Alert message: ' + dialog.message());
            expect (dialog.message()).toBe('I am a JS Alert');
            await dialog.accept();
        });
        await page.getByRole('button', { name: 'Click for JS Alert' }).click();
        // await page.getByText('Click for JS Alert').click();
        // await page.locator ("//button[text()='Click for JS Alert']").click();
        // await page.locator ('button', { hasText: 'Click for JS Alert' }).click();

        await expect (page.locator('#result')).toHaveText('You successfully clicked an alert');
    });

    test('JS Confirm Accept 2', async ({ page }) => {
        page.once ('dialog', async dialog => {
            console.log('Confirm type: ' + dialog.type());
            expect (dialog.type()).toBe('confirm');
            console.log('Confirm message: ' + dialog.message());
            expect (dialog.message()).toBe('I am a JS Confirm');
            await dialog.accept();
            // await dialog.dismiss(); // This will be ignored as the dialog is already accepted
        });
        await page.getByRole('button', { name: 'Click for JS Confirm' }).click();
        await expect (page.locator('#result')).toHaveText('You clicked: Ok');
    });

    test('JS Prompt Accept 3', async ({ page }) => {
        const inputText = "Playwright JS Prompt";

        page.once ('dialog', async dialog => {
            console.log('Prompt type: ' + dialog.type());
            expect (dialog.type()).toBe('prompt');
            console.log('Prompt message: ' + dialog.message());
            expect (dialog.message()).toBe('I am a JS prompt');
            expect (dialog.defaultValue()).toBe('');
            await dialog.accept(inputText);
        });
        await page.getByRole('button', { name: 'Click for JS Prompt' }).click();
        await expect (page.locator('#result')).toHaveText(`You entered: ${inputText}`);
    });

});