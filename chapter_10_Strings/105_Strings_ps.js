// Extracting Substrings

let str = "Login_Test_Pass_001";

// slice(start, end) negative index supported, end not included
// slice returns a new string, does not modify the original string
console.log(str.slice(0, 5)); // Output: (0,4) -> Login
console.log(str.slice(11)); // Output: Pass_001
console.log(str.slice(-3)); // Output: 001
console.log(str.slice(-8, -4)); // Output: Pass
let testNumber = str.slice(-3); // '001'
console.log(testNumber); // Output: 001

// substring(start, end) negative index not supported(no negatives - treat as zero), end not included
console.log(str.substring(0, -5)); // Output:  (negative index treated as 0)
console.log(str.substring(6, 10)); // Output: Test

// at() for single chars
str.at(0); // 'L'
str.at(-1); // '1' (last character)