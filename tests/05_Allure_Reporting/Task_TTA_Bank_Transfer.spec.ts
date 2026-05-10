import { test, expect } from '@playwright/test';

test ('Perform Bank Fund Transfer from TTA Bank', async ({ page }) => {

    let totalFunds: number = 0;
    let transferAmount = 5000;
    let remainingAmount: number = 0;
    
    await page.goto ("https://tta-bank-digital-973242068062.us-west1.run.app/");

    await page.waitForTimeout(2000);
    await expect (page.locator('//h1[text()="TTA Bank"]')).toBeVisible();
    await expect (page.getByPlaceholder("you@example.com")).toBeVisible();
    await expect (page.getByPlaceholder("you@example.com")).toHaveValue("alex.morgan@ttabank.com");
    await expect (page.getByPlaceholder("••••••••")).toBeVisible();
    await page.getByRole ("button", { name: "Sign Up" }).click();

    await page.getByPlaceholder("John Doe").fill("Rasiha Sri");
    await page.getByPlaceholder("you@example.com").fill("rasiha@ttabank.com");
    await page.getByPlaceholder("••••••••").fill("password123");
    await page.getByRole("button", { name: "Create Account" }).click();


    let totalFundsLocator = page.locator ('//p[text()="Total Balance"]/following-sibling::h3');
    let totalFundsText = await totalFundsLocator.textContent() ?? null;
    if (totalFundsText === null) {
        throw new Error("Total funds text not found");
    }
    console.log ("Total funds available in the account: " + totalFundsText);
    totalFunds = balancetoTextConversion(totalFundsText);

    await page.getByRole ("button", { name: "Transfer Funds" }).click();
    await expect (page.getByRole ("button", { name: "Transfer Money" })).toBeVisible();
    await page.getByPlaceholder("0.00").fill(`${transferAmount.toString()}`);
    await page.getByRole ("button", { name: "Continue" }).click();

    await expect (page.getByText("Review Transfer")).toBeVisible();

    let reviewAmount = await page.locator (`//span[text()="Amount"]/following-sibling::span`).textContent();
    if (reviewAmount === null) {
        throw new Error("Review amount text not found");
    }
    balancetoTextConversion(reviewAmount);
    console.log ("Amount displayed in review transfer page: " + reviewAmount);
    expect (balancetoTextConversion(reviewAmount)).toEqual(transferAmount);

    await page.getByRole('button', { name : 'Confirm Transfer'}).click();
    await page.getByRole('button', { name : 'Dashboard'}).click();

    remainingAmount = totalFunds - transferAmount;
    totalFundsLocator = page.locator ('//p[text()="Total Balance"]/following-sibling::h3');
    totalFundsText = await totalFundsLocator.textContent() ?? null;
    if (totalFundsText === null) {
        throw new Error("Total funds text not found");
    }
    totalFunds = balancetoTextConversion(totalFundsText);

    expect (totalFunds).toEqual(remainingAmount);
    console.log ("Remaining amount after transfer: " + remainingAmount);

})

function balancetoTextConversion (any: string): number {
        return parseFloat(any.replace(/[$,]/g, ""));
}
