// Higher order functions

// A function that takes a function as an argument, or returns a function as a result

function runWithLogging (testFn, testName) {
    console.log(`Starting: ${testName}`);
    let result = testFn();
    console.log(`Finished: ${testName} -> Result: ${result}`);
    return result;
}

function loginTest() {
    return "pass";
}

function loginTestFail() {
    return "fail";
}

console.log (runWithLogging(loginTest, "Login Test"));
console.log (runWithLogging(loginTestFail, "Login Test Fail"));