// Array

let fruits = []; // Empty array
let fruits_fresh = ["Apple", "Banana", "Cherry"]; // Array with initial values

let arr = [10,20,30,40]; // 0-3 4 elements
console.log(arr.length); // 4
console.log(arr[0]); // 10
console.log(arr[3]); // 40
console.log(arr[4]); // undefined

let testresults = ["pass", "skip", "fail", "pass"]; // Array of strings

let mixed = [10, "Hello", true, null]; // Array with mixed data types

// Creating arrays
//  Array literal (preferred way)
let browsers = ["Chrome", "Firefox", "Edge", "Safari"];

let object = []; // Array of objects

// Array constructor (not recommended)
let numbers = new Array(3); // Creates an array of length 3 with empty slots
let numbers2 = new Array(1,2,3,4,5);

let scores = new Array(100,200,300); // Creates an array with the values 100, 200, 300
console.log(scores); // [100, 200, 300]

let test = Array.of(1,2,3,4); // Creates an array with the values 1, 2, 3, 4
console.log(test); // [1, 2, 3, 4]
console.log(test[0]); // 1
console.log(test[3]); // 4

// Array.from() - creates an array from an iterable or array-like object
let chars = Array.from("Hello"); // Creates an array of characters from the string "Hello"
console.log(chars); // ['H', 'e', 'l', 'l', 'o']

