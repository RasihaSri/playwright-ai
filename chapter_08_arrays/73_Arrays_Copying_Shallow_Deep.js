let original =  [1, 2, 3];

// Shallow copy 
let copy1 = [...original]; // Using spread operator
console.log(copy1); // [1, 2, 3]
let copy2 = original.slice();
console.log(copy2); // [1, 2, 3]
let copy3 = Array.from(original);
console.log(copy3); // [1, 2, 3]
let copy4 = original.concat();
console.log(copy4); // [1, 2, 3]

copy1.push(4);
console.log(copy1); // [1, 2, 3, 4]
console.log(original); // [1, 2, 3] - original is unchanged

// Deep copy (for nested arrays) JSON
let copy5 = JSON.parse(JSON.stringify(original)); // deep copy 
original.push(99);
console.log(original); // [1, 2, 3, 99]
console.log(copy5); // [1, 2, 3] - copy5 is unaffected by changes to nested array in original

