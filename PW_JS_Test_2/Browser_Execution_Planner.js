// You have an array of all supported browsers and another array of temporarily blocked browsers. 
// Write a function that returns the runnable browsers, the blocked browsers, 
// and a printable execution plan string such as `"Run on: chromium, webkit | Skip: firefox"`.

// allBrowsers = ["chromium", "firefox", "webkit"], blockedBrowsers = ["firefox"]

// Ouput: { runnable: ["chromium", "webkit"], blocked: ["firefox"], plan: "Run on: chromium, webkit | Skip: firefox" }

let allBrowsers = ["chromium", "firefox", "webkit"];
let blockedBrowsers = ["firefox"];

function browserExecutionPlan(allBrowsers, blockedBrowsers) {
    let runnableBrowsers = allBrowsers.filter(browser => !blockedBrowsers.includes(browser));
    let blockedBrowsersList = allBrowsers.filter(browser => blockedBrowsers.includes(browser));
    let planString = `Run on: ${runnableBrowsers.join(", ")} | Skip: ${blockedBrowsersList.join(", ")}`;
    return {
        runnable: runnableBrowsers,
        blocked: blockedBrowsersList,
        plan: planString
    };
}

let result = browserExecutionPlan(allBrowsers, blockedBrowsers);

console.log (`{
  runnable: ["${result.runnable.join('", "')}"],
  blocked: ["${result.blocked.join('", "')}"],
  plan: "${result.plan}"
}`);
