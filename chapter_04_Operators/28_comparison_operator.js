// =, ==, ===

// = -> Assignment operator
// == -> Equality operator (loose equality)
// === -> Strict equality operator

// <, >, <=, >= -> Comparison operators

// != -> Not equal operator (loose inequality)
// !== -> Strict not equal operator

console.log(3 > 4); // false
console.log(3 < 4); // true
console.log(3 >= 4); // false
console.log(3 <= 4); // true    

console.log(3 == '3'); // true (loose equality, type coercion occurs)
console.log(3 === '3'); // false (strict equality, no type coercion)

console.log(3 != '3'); // false (loose inequality, type coercion occurs)
console.log(3 !== '3'); // true (strict inequality, no type coercion)
// console.log(3 !=== '4'); // not exist, syntax error