function calculate (a, b, callback) {
    return operation(a,b);
}

let sum = calculate (5, 3, function(x,y) {
    return x + y;
});

console.log ("Sum: " + sum);

console.log ("A: Test suite started");

setTimeout(function() {
    console.log ("B: Slow API test finished");
}, 1000); // Simulating an asynchronous operation with a delay of 1 second

console.log ("C: Fast unit test finished");