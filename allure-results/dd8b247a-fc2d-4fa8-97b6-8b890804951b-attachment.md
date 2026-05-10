# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 10_Keyboard_Hover_Drag_Drop\Task_Context_Menu.spec.ts >> Context Right Click Menu
- Location: tests\10_Keyboard_Hover_Drag_Drop\Task_Context_Menu.spec.ts:3:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('#output')
- Expected substring  - 1
+ Received string     + 6

- ⌫
+ {
+   "action": "quit",
+   "label": "Quit",
+   "target": "ctx-target",
+   "at": "2:40:09 AM"
+ }

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('#output')
    2 × locator resolved to <div id="output" data-testid="ctx-output" class="submission-output">{↵  "action": "delete",↵  "label": "Delete",↵  "t…</div>
      - unexpected value "{
  "action": "delete",
  "label": "Delete",
  "target": "ctx-target",
  "at": "2:40:09 AM"
}"
    4 × locator resolved to <div id="output" data-testid="ctx-output" class="submission-output">{↵  "action": "quit",↵  "label": "Quit",↵  "targe…</div>
      - unexpected value "{
  "action": "quit",
  "label": "Quit",
  "target": "ctx-target",
  "at": "2:40:09 AM"
}"

```

# Test source

```ts
  1  | import { test, expect} from '@playwright/test';
  2  | 
  3  | test ("Context Right Click Menu", async ({ page }) => {
  4  | 
  5  |     await page.goto ("https://app.thetestingacademy.com/playwright/widgets/context-menu");
  6  | 
  7  |     const allOptions: string[] = await page.locator('ul.context-menu-list span').allInnerTexts();
  8  |     console.log ("Context menu options: " + allOptions);
  9  | 
  10 |     // except paste option
  11 |     for (const option of allOptions) {
  12 |         if (option === "Paste" || option === "⌘V") continue;
  13 |         await page.locator ('span.context-menu-one').first().click({ button: 'right' });
  14 |         await page.getByRole('button', { name: `${option}` }).click();
> 15 |         expect (page.locator("#output")).toContainText(option);
     |                                          ^ Error: expect(locator).toContainText(expected) failed
  16 |         await page.keyboard.press("Escape");
  17 |     }
  18 | 
  19 | 
  20 |     await page.waitForTimeout(2000);    
  21 | });
```