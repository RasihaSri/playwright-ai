# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 05_Allure_Reporting\Task_TTA_Bank_Transfer.spec.ts >> Perform Bank Fund Transfer from TTA Bank
- Location: tests\05_Allure_Reporting\Task_TTA_Bank_Transfer.spec.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('textbox', { name: 'Amount' })

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e4]:
    - complementary [ref=e5]:
      - generic [ref=e6]:
        - img [ref=e7]
        - generic [ref=e10]: TTA Bank
      - navigation [ref=e12]:
        - button "Dashboard" [ref=e13] [cursor=pointer]:
          - img [ref=e14]
          - text: Dashboard
        - button "Transfer Funds" [active] [ref=e19] [cursor=pointer]:
          - img [ref=e20]
          - text: Transfer Funds
        - button "Expense Tracker" [ref=e23] [cursor=pointer]:
          - img [ref=e24]
          - text: Expense Tracker
        - button "Transactions" [ref=e27] [cursor=pointer]:
          - img [ref=e28]
          - text: Transactions
        - button "AI Support" [ref=e32] [cursor=pointer]:
          - img [ref=e33]
          - text: AI Support
        - button "Settings" [ref=e35] [cursor=pointer]:
          - img [ref=e36]
          - text: Settings
      - generic [ref=e39]:
        - generic [ref=e40]:
          - img "User" [ref=e41]
          - generic [ref=e42]:
            - generic [ref=e43]: Rasiha Sri
            - generic [ref=e44]: rasiha@ttabank.com
        - button "Sign Out" [ref=e45] [cursor=pointer]:
          - img [ref=e46]
          - text: Sign Out
    - main [ref=e49]:
      - generic [ref=e50]:
        - heading "Transfer Funds" [level=1] [ref=e51]
        - button [ref=e53] [cursor=pointer]:
          - img [ref=e54]
      - generic [ref=e59]:
        - generic [ref=e60]:
          - button "Transfer Money" [ref=e61] [cursor=pointer]
          - button "Manage Beneficiaries" [ref=e62] [cursor=pointer]
        - generic [ref=e64]:
          - generic [ref=e65]:
            - generic [ref=e66]: From Account
            - combobox [ref=e67]:
              - 'option "Savings Account - 9938 (Available: $35,000)" [selected]'
              - 'option "Current Account - 8821 (Available: $15,000)"'
          - img [ref=e70]
          - generic [ref=e72]:
            - generic [ref=e73]: To Beneficiary
            - generic [ref=e74]:
              - combobox [ref=e75]:
                - option "Sarah Smith (Chase) - 1234567890" [selected]
                - option "Landlord (Wells Fargo) - 0987654321"
              - button "Add New Beneficiary" [ref=e76] [cursor=pointer]:
                - img [ref=e77]
          - generic [ref=e78]:
            - generic [ref=e79]: Amount
            - generic [ref=e80]:
              - generic:
                - generic: $
              - spinbutton [ref=e81]
            - paragraph [ref=e82]: "Max available: $35,000"
          - generic [ref=e83]:
            - generic [ref=e84]: Note (Optional)
            - textbox "e.g. Rent for October" [ref=e85]
          - button "Continue" [ref=e86] [cursor=pointer]
  - generic [ref=e87]: $0k
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test ('Perform Bank Fund Transfer from TTA Bank', async ({ page }) => {
  4  |     await page.goto ("https://tta-bank-digital-973242068062.us-west1.run.app/");
  5  | 
  6  |     await page.waitForTimeout(2000);
  7  |     await expect (page.locator('//h1[text()="TTA Bank"]')).toBeVisible();
  8  |     await expect (page.getByPlaceholder("you@example.com")).toBeVisible();
  9  |     await expect (page.getByPlaceholder("you@example.com")).toHaveValue("alex.morgan@ttabank.com");
  10 |     await expect (page.getByPlaceholder("••••••••")).toBeVisible();
  11 |     await page.getByRole ("button", { name: "Sign Up" }).click();
  12 | 
  13 |     await page.getByPlaceholder("John Doe").fill("Rasiha Sri");
  14 |     await page.getByPlaceholder("you@example.com").fill("rasiha@ttabank.com");
  15 |     await page.getByPlaceholder("••••••••").fill("password123");
  16 |     await page.getByRole("button", { name: "Create Account" }).click();
  17 | 
  18 | 
  19 |     let totalFunds = page.locator ('//p[text()="Total Balance"]/following-sibling::h3');
  20 |     let totalFundsText = await totalFunds.textContent();
  21 |     console.log ("Total funds available in the account: " + totalFundsText);
  22 | 
  23 |     await page.getByRole ("button", { name: "Transfer Funds" }).click();
  24 |     await expect (page.getByRole ("button", { name: "Transfer Money" })).toBeVisible();
  25 | 
> 26 |     await page.getByRole("textbox", { name: "Amount" }).fill("5000");
     |                                                         ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  27 | 
  28 |     await page.waitForTimeout(2000);
  29 | })
  30 | 
  31 | 
```