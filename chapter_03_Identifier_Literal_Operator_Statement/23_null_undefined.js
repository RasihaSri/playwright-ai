console.log(null == undefined); // Output: true
// The equality operator (==) performs type coercion, and in this case, it considers null and undefined to be equal. Therefore, the expression null == undefined evaluates to true.

console.log(null === undefined); // Output: false
// The strict equality operator (===) does not perform type coercion, and it considers null and undefined to be different types. Therefore, the expression null === undefined evaluates to false.

console.log(null == 0); // Output: false
// The equality operator (==) does not consider null to be equal to 0. Therefore, the expression null == 0 evaluates to false.

conspole.log(null == ""); // Output: false
// The equality operator (==) does not consider null to be equal to an empty string. Therefore, the expression null == "" evaluates to false.

console.log(undefined == 0); // Output: false
// The equality operator (==) does not consider undefined to be equal to 0. Therefore, the expression undefined == 0 evaluates to false.            

console.log(undefined == ""); // Output: false
// The equality operator (==) does not consider undefined to be equal to an empty string. Therefore, the expression undefined == "" evaluates to false.

// == and ===

// ==  (Loose Equality): This operator compares two values for equality after performing type coercion if necessary. It will convert the values to a common type before making the comparison. For example, null == undefined evaluates to true because both null and undefined are considered equal when using loose equality.
// === (Strict Equality): This operator compares two values for equality without performing type coercion. It checks both the value and the type of the operands. For example, null === undefined evaluates to false because null and undefined are of different types, even though they are considered equal in loose equality.