/* console.log (name); // undefined due to hoisting
var name = "Pramod";
console.log(name); // "Pramod" */

/* console.log(a); // ReferenceError: Cannot access 'name' before initialization
let a = "Pramod"; */

// -----Phase 1: Memory Creation-----
var a = undefined; // Memory is allocated for 'a' and initialized with undefined

// -----Phase 2: Code Execution-----    
a = "Pramod"; // The value "Pramod" is assigned to 'a' during code execution