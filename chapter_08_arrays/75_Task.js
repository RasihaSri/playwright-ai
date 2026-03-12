let arr = [1, 2, 3];
let copy = arr; // This does not create a new array, copy is a reference to the same array
copy.push(4);
console.log(arr.length); // 4 - arr is also modified because copy is a reference to the same array
console.log(copy.length); // 4

let results = ["pass", "fail", "pass"];
let counts = results.reduce((acc, r) => {
    acc[r] = (acc[r] || 0) + 1; // Increment count for result r, initialize to 0 if not present
    return acc;
}, {});
console.log(counts.pass); // 2
console.log(counts.fail); // 1