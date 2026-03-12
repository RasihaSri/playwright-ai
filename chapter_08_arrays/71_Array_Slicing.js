// Slicing and Combining

let arr = [1, 2, 3, 4, 5, 6, 7];

// Slice returns a new array from start index to end index (exclusive), does not MUTATE (start->end-1)
let sliced = arr.slice(1, 3);
console.log(sliced); // [2, 3]  

arr.slice(-2); // [6, 7] - negative indices count from the end(start from -1 and till 2nd last element)
console.log(arr.slice(-3)); // [5, 6, 7]

console.log(arr.slice(2)); // [3, 4, 5, 6, 7] - if end is omitted, slices to the end

console.log(arr.slice(0)); // [1, 2, 3, 4, 5, 6, 7] - if start is omitted, starts from the beginning

console.log(arr.slice(8)); // [] - if start is out of bounds, returns empty array

console.log(arr.slice(3, 9)); // [4, 5, 6, 7] - if end is out of bounds, slices to the end

let arr2 = [1, 2, 3, 4, 5];

let a = [1, 2];
let b = [3, 4];
let c = a.concat(b); // [1, 2, 3, 4]
console.log(c);
// let c = a.concat(b, [5,6]); // [1, 2, 3, 4, 5, 6]
// console.log(c);

//spread operator can also be used to combine arrays(modern way)
let d = [...a, ...b];
console.log(d); // [1, 2, 3, 4]

// ..., ===
// Join

console.log(["Pass", "Fail", "Skip"].join(", ")); // "Pass, Fail, Skip"