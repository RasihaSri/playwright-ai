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