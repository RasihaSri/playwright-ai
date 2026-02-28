// Build a mini test suite runner that executes test cases and generates a summary report. 
// This question combines ALL topics: var/let/const, if-else, switch, for loop, while loop, do...while,
//  operators (===, !==, &&, ||, ??, ternary), typeof checks, and identifiers.

// Each test case has a name, expected value, actual value, and comparison type
//  (strictEqual, looseEqual, typeCheck, truthy, lessThan). Run all tests, track pass/fail/error counts, 
//  find consecutive passes from start (while loop), find first failure (do...while), and print a 
// comprehensive report.

// Input:
// { name: "Status code is 200", actual: 200, expected: 200, type: "strictEqual" }
// Output:
// ✅ TC-01: Status code is 200 → PASS (200 === 200) ... Pass Rate: 80.00% Overall: ❌ FAILED
// 💡 Explanation:Each test is evaluated based on its comparison type using switch, with results 
// tracked via counters and reported at the end.

let input = [ 
    { name: "Status code is 200", actual: 200, expected: 200, type: "strictEqual" },
    { name: "String equals number (loose equality)", actual: "5", expected: 5, type: "looseEqual" },
    { name: "Type is string", actual: 123, expected: "string", type: "typeCheck" },
    { name: "Token is truthy", actual: "abc123", expected: null, type: "truthy" },
    { name: "Value is less than 10", actual: 5, expected: 10, type: "lessThan" }
 ];

var passCount = 0;
var failCount = 0;
var errorCount = 0;
// Executing test cases using for loop and switch statement to determine the type of comparison
for (let i = 0; i < input.length; i++) {
    let testCase = input[i];
    let result = false;
    let errorMessage = "";
    let testName = testCase.name ?? "Unnamed Test Case";

    switch (testCase.type) {
        case "strictEqual":
            result = testCase.actual === testCase.expected;
            errorMessage = `Expected ${testCase.expected} but got ${testCase.actual}`;
            break;
        case "looseEqual":
            result = testCase.actual == testCase.expected;
            errorMessage = `Expected ${testCase.expected} but got ${testCase.actual}`;
            break;
        case "typeCheck":
            result = typeof testCase.actual === typeof testCase.expected;
            errorMessage = `Expected type ${typeof testCase.expected} but got type ${typeof testCase.actual}`;
            break;
        case "truthy":
            result = !!testCase.actual;
            errorMessage = `Expected a truthy value but got ${testCase.actual}`;
            break;
        case "lessThan":
            result = testCase.actual < testCase.expected;
            errorMessage = `Expected a value less than ${testCase.expected} but got ${testCase.actual}`;
            break;
        default:
            throw new Error(`Unknown test type: ${testCase.type}`);
    }

    if (result == true) {
        passCount++;
        console.log(`TC-${String(i+1).padStart(2,"0")}: ${testCase.name} → PASS (${errorMessage})`);
    } else {
        failCount++;
        console.log(`TC-${String(i+1).padStart(2,"0")}: ${testCase.name} → FAIL (${errorMessage})`);    
    }
}
// While loop to find consecutive passes from the start
let consecutivePasses = 0;
let index = 0;

while (index < input.length) {

    let tc = input[index];
    let passed = false;

    switch (tc.type) {
        case "strictEqual":
            passed = tc.actual === tc.expected;
            break;
        case "looseEqual":
            passed = tc.actual == tc.expected;
            break;
        case "typeCheck":
            passed = typeof tc.actual === typeof tc.expected;   
            break;
        case "truthy":
            passed = !!tc.actual;
            break;
        case "lessThan":
            passed = tc.actual < tc.expected;
            break;
        default:
            passed = false;
    }

    if (passed === true) {
        consecutivePasses++;
    } else {
        break;
    }   
    index++;
}
// Do...while loop to find the first failure index
let firstFailureIndex = 0;
let j = 0;

do {
    let tc = input[j];
    let failed = false;
    switch (tc.type) {
        case "strictEqual":
            failed = tc.actual !== tc.expected; 
            break;
        case "looseEqual":
            failed = tc.actual != tc.expected;
            break;
        case "typeCheck":
            failed = typeof tc.actual !== typeof tc.expected;
            break;
        case "truthy":
            failed = !tc.actual;
            break;
        case "lessThan":
            failed = tc.actual >= tc.expected;
            break;
        default:
            failed = false;
    }

    if (failed) {
        firstFailureIndex = j;
        break;
    }
    j++;
} while (j < input.length);

// Summary report
let totalTests = input.length;
let passRate = ((passCount / totalTests) * 100).toFixed(2);
let overallStatus = failCount > 0 ? "❌ FAILED" : "✅ PASSED";

console.log("\n=======Test Summary Report=======");
console.log(`Total Tests: ${totalTests}`);
console.log(`Passed: ${passCount}`);
console.log(`Failed: ${failCount}`);
console.log(`Errors: ${errorCount}`);
console.log(`Pass Rate: ${passRate}%`);
console.log(`Consecutive Passes from Start: ${consecutivePasses}`);
console.log(`First Failure at Test Case Index: ${firstFailureIndex !== -1 ? firstFailureIndex + 1 : "None"}`);
console.log(`Overall Status: ${overallStatus}`);