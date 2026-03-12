// Exercise 1 : API Response Validation

// You receive an array of API response codes. Write code to:
// Check if ALL responses are successful (200–299)
// Find the FIRST non-success code
// Return all unique error codes
let responses = [200, 201, 404, 500, 404, 200, 503];
let allSuccessful = responses.every(code=> code >=200 && code < 300);
console.log(allSuccessful); // false

let firstNonSuccess = responses.find(code => code < 200 || code >=300);
console.log(firstNonSuccess); // 404

let uniqueErrorCodes = [...new Set (responses.filter(code => code < 200 || code >=300))];
console.log(uniqueErrorCodes); // [404, 500, 503]

// Exercise 2 — Spot the Bug

// What is wrong with this code? Fix it.

let responseTimes = [320, 85, 1200, 450, 99];
// let sorted = responseTimes.sort();
let sorted = responseTimes.sort((a, b) => a-b); // Fix: sort numbers correctly
console.log("Fastest:", sorted[0]); // Fastest: 85

// Exercise 3 — Deep vs Shallow Copy (Tricky)

// What is the output and why? How would you fix it?

// javascript

let suite1 = [{ name: "login", status: "pass" }];
let suite2 = [...suite1];
suite2[0].status = "fail";
console.log(suite1[0].status); // Output: "fail" - because suite2 is a shallow copy of suite1, both arrays reference the same object. Modifying the object in suite2 also modifies it in suite1.