let val = null ?? "default value";
// Modern Javascript: nullish coalescing operator (??) returns the right-hand side operand when the left-hand side operand is null or undefined, otherwise it returns the left-hand side operand.
val = val + "Pramod"; // Output: default valuePramod
console.log(val); // Output: "default valuePramod
// In the above code, we are using the nullish coalescing operator (??) to assign a default value to the variable val when it is null. Since val is initially null, it will be assigned the value "default value". Then we concatenate "Pramod" to val, resulting in "default valuePramod". Finally, we log the value of val to the console.

