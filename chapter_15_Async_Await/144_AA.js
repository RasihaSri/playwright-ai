// Basic Async/Await Example

async function getTestResults() {
    return "Pass";
}

// async function ALWAYS returns a Promise, even if we return a non-Promise value
getTestResults().then(function(result) {
    console.log("Test Result:", result);
}); // Test Result: Pass

async function runTests() {
    let result1 = await Promise.resolve("Login Test Passed");
    console.log("Test 1:", result1);
    let result2 = await Promise.resolve("Dashboard Test Passed");
    console.log("Test 2:", result2);
}

runTests(); // Test 1: Login Test Passed, Test 2: Dashboard Test Passed