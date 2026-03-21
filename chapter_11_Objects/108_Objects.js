// Objects

// Key and value

let student1 = { name: "Amit", age: 65 };
let student2 = { name: "Pramod" };
let student3 = { name: "Pramod", age: 87, phone: 1234567890 };

// Key will not be in double quotes, but value will be in double quotes
// Below key in doubt is actually JSON
let JSON_student4 = { "name": "Pramod", "age": 87, "phone": 987654320 };

let a = { status: "pass" };
console.log(a.status); // pass
console.log(a["status"]); // pass

let a1 = { status: "pass" };
console.log(a1.status); // pass

let b = a; // b copies the reference of a, not the value
b.status = "fail"; // changing b also changes a, because both a and b point to the same object
console.log(a.status); // fail
console.log(b.status); // fail

// Two separate objects - different memory
let c = { status: "pass" };
let d = { status: "pass" };
console.log(c===d); // false - different memory locations