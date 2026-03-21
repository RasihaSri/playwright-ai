const user = { name: 'John', age: 30, city: 'New York' };

// Basic destructuring
const { name, age } = user;
console.log(name); // Output: John
console.log(age); // Output: 30

// Rename variables
const {name: userName, age: userAge} = user;
console.log(userName); // Output: John
console.log(userAge); // Output: 30

// Default values
const { country = 'USA' } = user;
console.log(country); // Output: USA

const data = {user: {name: "John", address: { city: "New York", zip: "10001" }}};
const { user: { address: { city } } } = data;