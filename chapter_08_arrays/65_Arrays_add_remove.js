let arr = [1,2,3];

// Adding to End
arr.push(4); // Adds 4 to the end of the array
console.log(arr); // [1, 2, 3, 4]

// Remove from End
arr.pop(); // Removes the last element (4) from the array
console.log(arr); // [1, 2, 3]

arr.push(5,6); // Adds 5 and 6 to the end of the array
console.log(arr); // [1, 2, 3, 5, 6]

// Adding to Beginning
arr.unshift(0); // Adds 0 to the beginning of the array
console.log(arr); // [0, 1, 2, 3, 5, 6]

// Remove from Beginning
arr.shift(); // Removes the first element (0) from the array
console.log(arr); // [1, 2, 3, 5, 6]

// Adding and Removing with splice
arr.splice(2, 1); // At index 2, remove 1 element and add nothing
console.log(arr); // [1, 2, 5, 6]

arr.splice(2, 0, 99); // At index 2, remove 0 elements and add 99
console.log(arr); // [1, 2, 99, 5, 6]

arr.splice(1, 2, 88, 77); // At index 1, remove 2 elements and add 88 and 77
console.log(arr); // [1, 88, 77, 5, 6]

// ....elements operator (spread syntax)
let arr2 = [10,20,30];
let combined = [...arr, ...arr2];
console.log(combined); // [1, 88, 77, 5, 6, 10, 20, 30]