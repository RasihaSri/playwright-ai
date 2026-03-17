function outer() {
    let message = "Hello";
    console.log('Outer called!!!');

    function inner() {
        console.log(message); // Hello, because inner function has access to the outer function's variable
    }
    return inner; // Return the inner function, so it can be called outside the outer function by name alone.
}

let innerFunction = outer(); // Call the outer function and get the inner function
innerFunction(); // Call the inner function, which has access to the outer function's variable

// inner(); // This will throw an error because inner is not defined in the global scope, it is only defined inside the outer function. We need to call the outer function first to get the inner function, and then call the inner function.

// outer(); // This will call the outer function, but it does not return anything or call the inner function, so it will not log anything