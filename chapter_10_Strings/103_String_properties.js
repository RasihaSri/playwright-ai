// String properties and Basic Access

let str = "Hello, World!";

// Length of the string (starts from 1, includes spaces and punctuation)
console.log(str.length); // Output: 13

// Accessing characters by index (starts from 0)
console.log(str[0]); // Output: H
console.log(str[7]); // Output: W
console.log(str[-1]); // Output: undefined (negative indices are not supported)
console.log(str.at(-1)); // Output: ! (last character)
console.log(str.at(-6)); // Output: W 

// charAt() method
console.log(str.charAt(0)); // Output: H
// charCodeAt() method - returns the Unicode value of the character at the specified index
console.log(str.charCodeAt(0)); // Output: 72 (Unicode for 'H')
