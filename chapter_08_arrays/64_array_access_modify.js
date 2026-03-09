// Accessing and modifying arrays
let statuses = ["pass", "fail", "skip", "pass"];

// Accessing elements
console.log(statuses[0]); // "pass"
console.log(statuses[2]); // "skip"

console.log(statuses.at(-1)); // last element "pass" (negative indices work with the at() method)
console.log(statuses.at(-2)); // second last element "skip"
console.log(statuses.at(-3)); // third last element "fail"
console.log(statuses.at(-5)); // undefined (out of bounds)

// Modifying elements
statuses[1] = "blocked"; // Change "fail" to "blocked"
console.log(statuses); // ["pass", "blocked", "skip", "pass"]

// Length property
console.log(statuses.length); // 4