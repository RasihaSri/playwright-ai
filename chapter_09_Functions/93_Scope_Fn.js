// Scope in functions

let env = "staging";

function setupConfig () {
    let timeout = 3000;
    console.log(env); // staging, because env is in the outer scope, can access global
    console.log(timeout); // 3000, because timeout is in the local scope of the function, can access local variable
}

setupConfig();
console.log(env); // staging, because env is in the global scope, can access global variable
// console.log(timeout); // ReferenceError: timeout is not defined, because timeout is in the local scope of the function, cannot access local variable outside the function

// Nested scope

function outer() {
    let x = 10;
    function inner() {
        let y = 20;
        console.log(x); // 10, because x is in the outer scope, can access outer variable
    }

    inner();
    // console.log(y); // ReferenceError: y is not defined, because y is in the inner scope, cannot access inner variable outside the inner function
}

outer();