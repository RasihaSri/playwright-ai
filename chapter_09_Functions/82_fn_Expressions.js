const greet = function(name) {
    console.log(`Hello, ${name}!`);
}

// Type 4 functions with arguments and return type
function greet (name) {
    return `Hello, ${name}!`;
}

const greet1 = function(name) {
    console.log(`Hello, ${name}!`);
}
// Functions as expressions
greet1('Rasiha'); // Hello, Rasiha!

// This is a function expression, we are assigning an anonymous function to a variable called greet. 
// We can call the function using the variable name.