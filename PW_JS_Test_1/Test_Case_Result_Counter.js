// After a test suite runs, you receive an array of test results (strings: "pass", "fail", "skip").
//  Write a JavaScript program using a for loop that counts how many tests passed, failed, and were skipped. 
//  Print a test report with total tests, counts, pass rate percentage, and a verdict
//   (all passed → ready for release, ≤2 failures → review, >2 failures → block release).

testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"];

let totalTests = testResults.length;
let passCount = 0;
let failCount = 0;
let skipCount = 0;

for(let i = 0; i < totalTests; i++) {
    if (testResults[i] === "pass") {
        passCount++;
    }
    if (testResults[i] === "fail") {
        failCount++;
    }
    if (testResults[i] === "skip") {
        skipCount++;
    }
} 
let passRate = passCount/totalTests * 100;
console.log ("Total Tests : " + totalTests + " Passed: " + 
    passCount + " Failed: " + failCount +
     " Skipped: " + skipCount + " Pass Rate: " + passRate.toFixed(2)+"%" + 
     " VERDICT: " + (passCount === totalTests ? "No failures. Ready for Release" : (failCount <= 2 ? "Minor failures. Review before Release" : "Major failures. Block the Release")));