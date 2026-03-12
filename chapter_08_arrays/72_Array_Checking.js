// Checking Arrays

// Check if a variable is an array

let result = Array.isArray([1, 2, 3]); // true
let result2 = Array.isArray({}); // false
console.log(result);
console.log(result2);

//every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
let r =[80, 90, 85].every(score => score > 75); // true - checks if all elements satisfy the condition
console.log(r);
let s = [80, 90, 70].every(score => score < 70); // false - checks if all elements satisfy the condition
console.log(s);

//some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
let t = [80, 90, 70].some(score => score < 75); // true - checks if at least one element satisfies the condition
console.log(t);
let u = [80, 90, 70].some(score => score > 95); // false - checks if at least one element satisfies the condition
console.log(u);