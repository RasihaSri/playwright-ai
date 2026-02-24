// ==, === and =

let a = 5;
// console.log(5 = 5); // This will cause a syntax error because = is the assignment operator, not a comparison operator.
console.log(5 == 5); // Output: true
console.log(5 === 5); // Output: true

console.log(5 == "5"); // Output: true
// The equality operator (==) performs type coercion, which means it converts the operands to a common type before making the comparison. In this case, the string "5" is converted to the number 5, and since 5 is equal to 5, the expression evaluates to true.
console.log(5 === "5"); // Output: false
// The strict equality operator (===) does not perform type coercion, which means it compares both the value and the type of the operands. In this case, the number 5 is not of the same type as the string "5", so the expression evaluates to false.

console.log(5 == 5.0); // Output: true
console.log(5 === 5.0); // Output: true