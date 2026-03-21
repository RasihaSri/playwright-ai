// Transforming Strings

let str = "  Hello, World!  ";
console.log(str.toUpperCase()); // Output: HELLO, WORLD!
console.log(str.toLowerCase()); // Output: hello, world!

// trim() - removes whitespace from both ends of the string
console.log(str.trim()); // Output: Hello, World!
str.trimStart(); // Output: "Hello, World!  "
str.trimEnd(); // Output: "  Hello, World!"

// replace() - replaces the first occurrence of a substring
let msg = "Test: Fail. Retry: Fail.";
msg.replace("Fail", "Pass"); // Output: "Test: Pass. Retry: Fail." (first only)
// To replace all occurrences, use a regular expression with the global flag
msg.replace(/Fail/g, "Pass"); // Output: "Test: Pass. Retry: Pass."
// replaceAll() - replaces all occurrences of a substring (ES2021)
msg.replaceAll("Fail", "Pass"); // Output: "Test: Pass. Retry: Pass."
console.log(str.replace("World", "JavaScript")); // Output: "  Hello, JavaScript!  "

// concat() - concatenates strings
"Hello" + " " + "World"; // Output: "Hello World"
"Hello".concat(" ", "World"); // Output: "Hello World"
`${Hello} ${World}`; // Output: "Hello World"

let url = "https://app.vwo.com/?app=pramod";
console.log(url.replace(/app/g, "qa")); // Output: "https://qa.vwo.com/?qa=pramod"

// Splitting and Joining
"pass,fail,skip".split(","); // Output: ["pass", "fail", "skip"]
"hello".split(""); // Output: ["h", "e", "l", "l", "o"]

"test_login_pass".split("_").join(" "); // Output: "test login pass"

// Template literals
let parts = ["2024", "06", "30"];
let date = parts.join("-"); // Output: "2024-06-30"
console.log(date);
