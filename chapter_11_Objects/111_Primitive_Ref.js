// Primitive data types - Call by value
// Primitive data types include: number, string, boolean, null, undefined, symbol, bigint
let a=10;
let b=a; // b gets the value of a (10)
b=99; // changing b does not affect a
console.log(a); // Output: 10
console.log(b); // Output: 99

// Objects - Copied from reference - Call by reference
// Reference data types include: objects, arrays, functions
let obj1 = { val: 10 };
let obj2 = obj1;
obj2.val = 99; // changing obj2 also changes obj1 because they reference the same object
console.log(obj1.val); // Output: 99
console.log(obj2.val); // Output: 99