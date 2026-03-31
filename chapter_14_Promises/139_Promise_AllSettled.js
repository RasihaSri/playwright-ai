Promise.allSettled([
    Promise.resolve("Test A Passed!"),
    Promise.reject("Test B Failed!"),
    Promise.resolve("Test C Passed!")
]).then(function (results) {
    results.forEach(function(r,i) {
        console.log(`Test ${i+1}: ${r.status} - ${r.value || r.reason}`);
    });
}).catch(function (error){
    console.error("Error:", error);
});

// test report - you want results for ALL tests, not just stop at the first failure. 
// Promise.allSettled() gives you the status of all promises, whether they are fulfilled or rejected.