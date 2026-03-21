const obj = { a: 1, b: 2, c: 3 };

console.log(Object.keys(obj)); // Output: ['a', 'b', 'c']
console.log(Object.values(obj)); // Output: [1, 2, 3]
console.log(Object.entries(obj)); // Output: [['a', 1], ['b', 2], ['c', 3]]

const user = { name: 'Pramod', age: 30 };
console.log(user.hasOwnProperty('name')); // Output: true

for (const key in user) {
    console.log(`${key}: ${user[key]}`);
}

// Object.key/values/entries and for...in loop are used to iterate over the properties of an object.
Object.keys(user).forEach(key => {
    console.log(key); // Output: name, age
});

Object.entries(user).forEach(([key, value]) => {
    console.log(`${key}: ${value}`); // Output: name: Pramod, age: 30  
}); 