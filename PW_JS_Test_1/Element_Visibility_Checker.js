// In UI automation (Cypress/Playwright), you often need to validate element states before interacting with them. 
// Write a JavaScript program that checks an element's properties (isPresent, isDisplayed, isEnabled) and prints 
// the appropriate action a QA engineer should take. Use strict equality (===), logical operators (&&, ||), 
// and the ternary operator for severity level.

// States: READY (all true), DISABLED (present+displayed but not enabled), HIDDEN (present but not displayed), 
// NOT FOUND (not present).
// Severity: CRITICAL (not present), WARNING (not displayed or not enabled), OK (all good). 

let isPresent = true, isDisplayed = true, isEnabled = false;
let status = "";
let action = "";
if (isPresent === true && isDisplayed === true && isEnabled === true) {
    status = "READY";
    action = "Element is fully interactable. Proceed with action.";
} else if (isPresent === true && isDisplayed === true && isEnabled === false) {
    status = "DISABLED";
    action = "Element is visible but disabled. Wait for enable state or check preconditions.";
} else if (isPresent === true && isDisplayed === false) {
    status = "HIDDEN";
    action = "Element is present but hidden. Check visibility conditions or wait.";
} else if (isPresent === false) {
    status = "NOT FOUND";
    action = "Element is not present in the DOM. Check locator or page state.";
}

let severity = (isPresent === false) ? "CRITICAL" : (isDisplayed === false || isEnabled === false) ? "WARNING" : "OK";

console.log(`Status: ${status} Severity: ${severity} Action: ${action}`);