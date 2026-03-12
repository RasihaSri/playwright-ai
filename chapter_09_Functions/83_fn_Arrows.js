// Arrow Function (ES6)

const greet = function () {
    return `Hello! ${name}`;
}

// If you want to convert normal function to an arrow function, you can do it like this:
// Remove the keyword function, remove the keyword return, and remove the curly braces and use arrow syntax.
//  If the function has only one parameter, you can also remove the parentheses around the parameter.

const greet1 = (name2) => `Hello! ${name2}`;

console.log(greet1('Rasiha')); // Hello! Rasiha
console.log(greet('Rasiha')); // Hello! Rasiha

// Arrow functions only generally works whenever you have a single line.
const double = n => n * 2;
console.log(double(5)); // 10

// no params required 
const getEnv = () => "staging";
console.log(getEnv()); // staging

// suppose we have a multi line, can we use arrow function? 
// Yes, we can, but we need to use curly braces and return statement.
const getResult = (score) => {
    if (score >= 70) return 'pass';
    return 'fail';
};