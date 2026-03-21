// Searching & checking

let url = "https://staging.vwo.com/api/login?retry=true";

// includes() method - checks if a string contains a specified substring
url.includes("staging"); // true
url.includes("production"); // false

// startsWith() method - checks if a string starts with a specified substring
url.startsWith("https"); // true
url.startsWith("http://"); // false
url.endsWith("true"); // true

// indexOf() method - returns the index of the first occurrence of a specified substring,
//  or -1 if not found
console.log(url.indexOf("a")); // 10
console.log(url.lastIndexOf("a")); // 24
console.log(url.indexOf("nothere")); // -1

// search() method - similar to indexOf but can use regular expressions
// search - accepts regex, returns index
console.log(url.search("staging")); // 8 (index of 'staging')
console.log(url.search(/login/)); // 28 (index of 'login' using regex)

console.log(url.search(/\d+/)); // -1 (no digits followed by a slash)