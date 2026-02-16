// var, let, const

// var - function-scoped, can be redeclared and updated

var a = 10; // Global scope
console.log(a); // 10

function printHello() {
    console.log("Hello from test function");
    var a = 20; // Local scope (function scope)
    console.log(a); // 20
    if(true) {
        var a = 30; // Still function scope, not block scope
        console.log(a); // 30
    }
    console.log("F ->", a); // 30 (because var is function-scoped, not block-scoped)
}

printHello();
console.log(a); // 10
// console.log(b); // Error: b is not defined

// var also allows redeclaration and updating
var a = 40;
console.log(a); // 40

// let - block-scoped, cannot be redeclared but can be updated
let b = 50; // Global scope
console.log(b); // 50

function printHelloLet() {
    let b = 60; // Local scope (block scope)
    console.log(b);
    if(true) {
        let b = 70;
        console.log(b); // 70 (because let is block-scoped)
    }
}   

printHelloLet();
console.log(b); // 50
// LET does not allow redeclaration but allows updating
// let b = 80; // Error: Identifier 'b' has already been declared
b = 80; // Allowed, updating the value of b
console.log(b); // 80

const pi = 3.14; // Global scope
console.log(pi); // 3.14


