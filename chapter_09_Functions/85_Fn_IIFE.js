// Immediately Invoked Function Expression (IIFE)

// An IIFE is a function that is defined and immediately executed. Call by themselves.
// It is often used to create a new scope and avoid polluting the global namespace.

function name1 () {
    console.log('Hello');
}
name1(); // Hello - The function is defined and then called, so it logs 'Hello' to the console

// IIFE
(function () {
    console.log('Hi');
})(); // Hi - The function is defined and immediately invoked, so it logs 'Hi' to the console

(function () {
    console.log ('staging');
})();

(() => {
    console.log('production');
})();
