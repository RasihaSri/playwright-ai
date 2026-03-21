const user = {
    name: 'John',
    age: 30,
    age: 31, // duplicate age, overwrite
    email: 'john@example.com'
};

console.log(user); // { name: 'John', age: 31, email: 'john@example.com' }

// Accessing properties
console.log(user.name); // John
console.log(user['age']); // 31

// Dynamic property access
const key = 'email';
console.log(user[key]); // john@example.com

// Adding/modifying properties
user.city = "NYC";
user.age = 32; // modify existing property
console.log(user); // { name: 'John', age: 32, email: 'john@example.com', city: 'NYC' }

// Deleting properties
delete user.email;
console.log(user); // { name: 'John', age: 32, city: 'NYC' }