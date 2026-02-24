// Null - "intentionally nothing"

let selectedItem = null; // This is a null literal. It represents the absence of any value. In this case, the null literal is null. The variable selectedItem is assigned the value of this null literal, indicating that no item is currently selected.
let searchResult = null; // This is a null literal. It represents the absence of any value. In this case, the null literal is null. The variable searchResult is assigned the value of this null literal, indicating that no search results are currently available.

console.log(searchResult); // Output: null

// Undefined - "not assigned a value"
let declaredOnly; // This variable is declared but not assigned a value, so it is undefined by default. The variable declaredOnly is assigned the value of undefined, indicating that it has been declared but not initialized with any value.
console.log(declaredOnly); // Output: undefined

// Equality Comparison
console.log(null == undefined); // Output: true
// The equality operator (==) performs type coercion, and in this case, it considers null and undefined to be equal. Therefore, the expression null == undefined evaluates to true.