let testResults = ["pass", "fail", "pass", "skip"];

testResults.forEach(function(result, index) {
    console.log ("Test " + (index + 1) + ": " + result);
});

