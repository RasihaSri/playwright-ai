// true
if ("hello") console.log("String is truthy"); // "hello" is a non-empty string, so it is truthy
if (42) console.log("Number is truthy"); // 42 is a non-zero number, so it is truthy
if ({}) console.log("Object is truthy"); // An empty object is truthy
if ([]) console.log("Array is truthy"); // An empty array is truthy
// false
if ("") console.log("Wont print"); // "" is an empty string, so it is falsy
if (null) console.log("Wont print"); // null is falsy
if (undefined) console.log("Wont print"); // undefined is falsy
if (NaN) console.log("Wont print"); // NaN is falsy
if (0) console.log("Wont print"); // 0 is falsy