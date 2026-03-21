// Strings

let url = "https://app.vwo.com";
let status = 'pass';
let message = `Test completed in ${320}ms`; // template literal

// Single quotes
let a ='hello';

// Double quotes
let b = "world";

// Template literals (backticks) - allows expressions and multi-line strings
let name1 = "Alice";
let msg = `Hello, ${name1}! 2 + 2 = ${2 + 2}`;
console.log(msg); // Output: Hello, Alice! 2 + 2 = 4

// Multi-line
let report = `
    Test: Login
    Status: Pass
    Duration: 320ms
`;

// String() constructor (converts other types to strings)
console.log (String(200)); // Output: "200"
String(true); // Output: "true"
String(null); // Output: "null"
String(undefined); // Output: "undefined"
String([1,2]); // Output: "1,2" (array is converted to a comma-separated string)