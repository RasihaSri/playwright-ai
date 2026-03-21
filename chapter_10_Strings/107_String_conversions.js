// String conversions

// to string
(200).toString(); // '200'
(true).toString(); // 'true'

Number("123"); // 123

parseInt("123px"); // 123
parseFloat("3.14rem"); // 3.14

let str = "hello";
// str[0] = "H"; // does not change the string, strings are immutable
console.log(str); // Output: hello

let upper = str.toUpperCase(); // creates a new string, does not modify the original(str will not change)
console.log(upper); // Output: HELLO
console.log(str); // Output: hello

// repeat() - repeats the string a specified number of times
"abc".repeat(3); // Output: "abcabcabc"

// padStart() and padEnd() - pads the string with another string until it reaches a specified length
"5".padStart(3, "0"); // Output: "005"
"5".padEnd(3, "0"); // Output: "500"

// Interview Questions
// ✅ Validate URL contains expected environment

let url = "https://staging.myapp.com/dashboard";

url.includes("staging"); // true

url.startsWith("https"); // true

url.endsWith("/dashboard"); // true

// ✅ Extracting status code from log

let log = "[ERROR] 2024-03-07 TestCase: login - Status: 500";

let status = log.match(/Status: (\d+)/)[1]; // Extracts the status code (500) from the log

console.log(status); // Output: 500

// ✅ Masking sensitive information

let env = "staging"; 
let module = "auth"; 
let count = 7; 
let testId = `${env}_${module}_${String(count).padStart(3, "0")}`;
console.log(testId); // Output: "staging_auth_007"

// ✅ Normalizing test results

let actual = " PASS "; 
let expected = "pass"; 
actual.trim().toLowerCase() === expected;
console.log(actual.trim().toLowerCase() === expected); // Output: true

// ✅ Parsing query parameters from URL

let testUrl = "https://app.com/search?query=login&page=2&sort=asc"; 
let params = Object.fromEntries( testUrl.split("?")[1].split("&").map(p => p.split("=")) );
console.log(params); // Output: { query: "login", page: "2", sort: "asc" }

// ✅ Masking sensitive information in logs

let token = "Bearer eyJhbGciOiJIUzI1NiJ9.secret"; 
let masked = token.replace(/(?<=Bearer ).+/, "***REDACTED***");
console.log(masked); // Output: "Bearer ***REDACTED***"
