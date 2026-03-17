// Hoisting
// Function declarations are hoisted, meaning they can be called before they are defined in the code.
// Function expressions and arrow functions are not hoisted, so they cannot be called 
// before they are defined.

// Function declaration (hoisted)
greet ('Alice'); // Hello, Alice!

function greet (name) {
    console.log(`Hello, ${name}!`);
}

sayHi ('Bob'); // ReferenceError: Cannot access 'sayHi' before initialization

// Function expression (not hoisted)
const sayHi = function (name) {
    console.log(`Hi, ${name}!`);
}