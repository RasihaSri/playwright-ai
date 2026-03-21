let obj = { name: "login" };
console.log(Object.getOwnPropertyDescriptor(obj, "name")); 
// Output: { value: 'login', 
// writable: true, -- allows changing the value of the property
// enumerable: true, -- allows the property to be listed in loops(for...in) and Object.keys()
// configurable: true } -- allows deleting the property or changing its attributes