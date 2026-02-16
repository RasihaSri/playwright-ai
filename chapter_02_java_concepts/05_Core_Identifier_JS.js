// Identifiers, Literals, Operators

var a = 10; // a is an identifier, 10 is a literal, = is an operator
a = 20;
console.log(a);

// Variable name Identifier - a (name which is given to the container)
// Literal - Variable value -> 10, 20, "Hello", true, false, null, undefined (fixed value)
// Operator - = (used to assign value to the variable)

// Rules of an identifier:
// 1. It must start with a letter, underscore (_) or dollar sign ($)
// 2. It can contain letters, digits, underscores and dollar signs
// 3. It cannot start with a number
// 4. It cannot be a reserved keyword (like var, let, const, if, else, etc.)
// 5. It cannot contain spaces
// 6. It cannot contain special characters (except _ and $)
// 7. It is case-sensitive (a and A are different identifiers)

var _name = "Rasiha";
var $age = 25;
var firstName = "Rasiha";
var lastName = "Sri";
var fullName = firstName + " " + lastName;

var NAME = "Rasiha"; // valid but not recommended (all uppercase is usually used for constants)
var name = "Sri"; // valid and recommended (camelCase is commonly used for variables)

console.log(NAME);
console.log(name);

var pi = 3.14; // valid and recommended (lowercase is commonly used for variables)