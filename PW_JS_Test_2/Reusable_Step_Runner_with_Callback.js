// Write a higher-order function `runStep(stepName, actionFn)` that logs the start of a step, 
// executes the callback, and returns an object in the format `{ stepName, passed, message }`. 
// If the callback throws an error, catch it and return `passed: false` with the error message.

// Input : runStep("open dashboard", () => "Page loaded")


function runStep(stepName, actionFn) {
    try {
        const result = actionFn();
        return {
            stepName: stepName,
            passed: true,
            message: result
        };
    } catch (error) {
        return {
            stepName: stepName,
            passed: false,
            message: error.message
        };
    }
}

let stepResult = runStep("open dashboard", () => "Page loaded");
console.log (`{
  stepName: "${stepResult.stepName}",
  passed: ${stepResult.passed},
  message: "${stepResult.message}"
}`);