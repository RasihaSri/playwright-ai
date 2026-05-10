import { test, expect } from '@playwright/test';

test('Complete QA profile and add Git Hub profile', async ({ page }) => {
    // Go to the practice tables page
    await page.goto('https://app.thetestingacademy.com/playwright/tables/practice');

    // Fill QA profile 
    // Text Fields
    await page.getByLabel('First name').fill('Rasiha');
    await page.getByLabel('Last name').fill('Sri');

    // Radio Button
    await page.getByRole('radio', { name : "Female"}).check();

    // Dropdowns and date picker
    await page.getByLabel('Years of experience').selectOption('7');
    await page.getByLabel('Date').fill('2026-05-10');

    // Radio button for profession
    await page.getByTestId('profession-automation').click();

    // Many checkboxes for tools
    for (const tool of ['Selenium WebDriver', 'UFT']) {
        await page.getByRole ('checkbox', { name: tool }).check();
    }

    for (const continents of ['Asia', 'Australia', 'North America']) {
        await page.getByRole ('checkbox', { name: continents }).check();
    }

    // tab switch
    await page.getByRole('tab', { name: 'Switch Commands' }).click();
    await expect (page.locator('#selenium-tab-panel')).toContainText('Switch commands');

    // upload/download 
    await page.getByLabel('Upload Image').setInputFiles('tests/07_Web_Tables/avatar.png');
    const download = page.getByRole('link', { name: 'Download File' });
    download.click();
    console.log (await download.getAttribute('href'));
    await expect (download).toHaveAttribute('href', /sample-download\.txt$/);

    await page.waitForTimeout(2000);
});

