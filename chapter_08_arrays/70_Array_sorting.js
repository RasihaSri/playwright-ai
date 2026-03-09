// Sorting

let fruits = ["banana", "apple", "grape", "orange"];

// Sorts the array in place and returns the sorted array
fruits.sort();
console.log(fruits); // ["apple", "banana", "grape", "orange"]
// alphabetical by default

// Sorting numbers requires a compare function
let numbers = [40, 100, 1, 5, 25];
numbers.sort((a, b) => a - b); // Ascending order
console.log(numbers); // [1, 5, 25, 40, 100]

numbers.sort((a, b) => b - a); // Descending order
console.log(numbers); // [100, 40, 25, 5, 1]