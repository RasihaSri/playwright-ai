// Iterate through an array using for...of loop

let tests = ["login", "checkout", "search", "logout"] 

for (let i = 0; i < tests.length; i++) {
    console.log(tests[i]);
}

// for...of loop - more concise and easier to read for iterating through arrays
for (let test of tests) {
    console.log(test);
}

// for in loop - iterates over the indices of the array (not recommended for arrays)
for (let index in tests) {
    console.log(tests[index]);
}

// forEach method - takes a callback function and executes it for each element in the array(No return value)
tests.forEach((test, index) => {
    console.log(`Test ${index + 1}: ${test}`);
});

// entries() method - returns an iterator with [index, value] pairs for each element in the array
for (let [index, test] of tests.entries()) {
    console.log(`Test ${index + 1}: ${test}`);
}