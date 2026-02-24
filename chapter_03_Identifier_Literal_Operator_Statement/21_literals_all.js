let count = 42;
let negative =-100;
let zero=0;

let h = 0xFF;
let color_hex = "#FF5733";
console.log(color_hex); // Output: #FF5733

let octal = 0o755;
let pi = 3.14159;
let million = 1e6; // This is a numeric literal in scientific notation. It represents the number 1 followed by 6 zeros, which is equal to 1,000,000. The variable million is assigned the value of this numeric literal.
let tiny = 1e-6; // This is a numeric literal in scientific notation. It represents the number 1 followed by 6 decimal places, which is equal to 0.000001. The variable tiny is assigned the value of this numeric literal.

//Single Quotes
let single = 'Hello, World!';
let withDouble = 'She said, "Hello!"';

// Double Quotes
let double = "Hello, World!";
let withSingle = "It's a nice day!";

// Template Literals
let name = "Alice";
let greeting = `Hello, ${name}!`; // This is a template literal. It allows for embedding expressions inside a string using ${}. In this case, the expression ${name} will be evaluated and replaced with the value of the variable name, which is "Alice". The variable greeting is assigned the value of this template literal, which will be "Hello, Alice!".
console.log(greeting); // Output: Hello, Alice!

let math = `2+2=${2+2}`; // This is a template literal that includes an expression. The expression ${2+2} will be evaluated and replaced with the result of the calculation, which is 4. The variable math is assigned the value of this template literal, which will be "2+2=4".
console.log(math); // Output: 2+2=4

// i want to store the path of the file in a variable
let path = "C:\\Users\\Rasiha Sri\\Downloads\\LearningPlaywrightAIBatch\\chapter_03_Identifier_Literal_Operator_Statement\\21_literals_all.js"; // This is a string literal that represents the file path. The backslashes are escaped with another backslash to ensure they are treated as literal backslashes in the string. The variable path is assigned the value of this string literal, which is the file path.
console.log(path); // Output: C:\Users\Rasiha Sri\Downloads\LearningPlaywrightAIBatch\chapter_03_Identifier_Literal_Operator_Statement\21_literals_all.js

// ---> // - URLs
// ---> \\ - File paths on Windows

let address = "https://app.vwo.com/#login"; // This is a string literal that represents a URL. The variable address is assigned the value of this string literal, which is the URL "https://www.example.com".
console.log(address); // Output: https://app.vwo.com/#login

// String literal edge cases
let empty = ""; // This is an empty string literal. It represents a string with no characters. The variable empty is assigned the value of this empty string literal.
let space = " "; // This is a string literal that contains a single space character. The variable space is assigned the value of this string literal, which is a string with one space character.
let zero1 = "0"; // This is a string literal that contains the character "0". The variable zero1 is assigned the value of this string literal, which is a string representation of the number zero.

let isLoggedIn = true;
let hasPermission = false;