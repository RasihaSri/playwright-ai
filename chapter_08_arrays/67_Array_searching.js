// Searching

let results = ["pass", "fail", "skip", "pass"];

// indexOf() - returns the first index of the specified element, or -1 if not found
console.log(results.indexOf("pass")); // 0
console.log(results.indexOf("skip")); // 2
console.log(results.indexOf("blocked")); // -1 (not found)

// lastIndexOf() - returns the last index of the specified element, or -1 if not found
console.log(results.lastIndexOf("pass")); // 3

// includes() - returns true if the array contains the specified element, false otherwise
console.log(results.includes("fail")); // true
console.log(results.includes("blocked")); // false

// find() - returns the first matching element that satisfies the provided testing function, or undefined if not found
let num = [10, 20, 30, 40];
let foundNum = num.find(n => n > 25);
console.log(foundNum); // 30

// findIndex() - returns the index of the first matching element that satisfies the provided testing function, or -1 if not found
let foundIndex = num.findIndex(n => n > 25);
console.log(foundIndex); // 2 (index of 30)

// findLast() - returns the last matching element that satisfies the provided testing function, or undefined if not found
let foundLastNum = num.findLast(n => n > 25);
console.log(foundLastNum); // 40

// findLastIndex() - returns the index of the last matching element that satisfies the provided testing function, or -1 if not found
let foundLastIndex = num.findLastIndex(n => n > 25);
console.log(foundLastIndex); // 3 (index of 40)