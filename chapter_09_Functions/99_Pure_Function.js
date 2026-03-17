// Pure Function
// A pure function always returns the same result for the same input, and has no side effects 
// (does not modify any external state)

// Pure - no side effects, predictable output

function calculatePassRate (total, passed) {
    return ((passed / total) * 100).toFixed(2) + "%";
}

console.log(calculatePassRate(10, 7)); // "70.00%"
console.log(calculatePassRate(10, 7)); // "70.00%" - same input, same output

// Impure function - modifies external state, depends on external state
let threshold = 70;

function isPassing(score) {
    return score >= threshold; // depends on external variable 'threshold'
}

console.log(isPassing(threshold)); // true

threshold = 50; // Modifying external state

console.log(isPassing(threshold)); // true - same input, different output due to external state change