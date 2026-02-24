0 == ""     // true (both sides are converted to 0)
0 == "0"    // true (both sides are converted to 0)
0 == false  // true (both sides are converted to 0)
"" == false // true (both sides are converted to 0)
null == undefined // true (both null and undefined are considered equal in loose equality)
"\t\n" == 0 // true (the string is converted to 0)

// Rule Breaker (all below are  false)

null == 0 // false
null == "" // false
null == false // false
undefined == 0 // false
undefined == "" // false
undefined == false // false
NaN == NaN // false (NaN is not equal to anything, including itself)

console.log("" === false); // false (strict equality does not perform type coercion, so an empty string is not equal to false)
console.log(0 === false); // false (strict equality does not perform type coercion, so 0 is not equal to false) 
console.log(NaN === NaN); // false (NaN is not equal to anything, including itself, even with strict equality)

console.log("" == false); // true (loose equality performs type coercion, so an empty string is considered equal to false)
console.log(null == undefined); // true (loose equality considers null and undefined to be equal)
console.log(null === undefined); // false (strict equality does not consider null and undefined to be equal, as they are of different types)
console.log (0 == false); // true (loose equality performs type coercion, so 0 is considered equal to false)

console.log("0" == false); // true (loose equality performs type coercion, so "0" is considered equal to false)
console.log("0" == ""); // false (loose equality does not consider "0" to be equal to an empty string)

let name = null; // This is a null literal. It represents the absence of any value. In this case, the null literal is null. The variable name is assigned the value of this null literal, indicating that it does not currently hold any meaningful value.
let age;

name = "pramod"; // The variable name is now assigned the string literal "pramod". This means that the variable name now holds the value of the string "pramod", which represents a sequence of characters. The previous value of null is overwritten by this new assignment.

var p = NaN; // This is a numeric literal that represents "Not-a-Number". It is a special value in JavaScript that indicates an invalid number. The variable p is assigned the value of NaN, which means that it does not represent a valid numeric value. NaN is typically the result of an undefined or erroneous mathematical operation, such as dividing zero by zero or taking the square root of a negative number.
p = p+10;

var a = 0/0;
var a1 = 0.0/0.0;

console.log(a);

let a2;
console.log(a2);

let a3 = null;
console.log(a3);