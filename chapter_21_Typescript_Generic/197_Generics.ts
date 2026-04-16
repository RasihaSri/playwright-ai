function getString(name: string): string {
    return `Result for ${name}`;
}

getString("Alice");
// getString(123); // Error: Argument of type 'number' is not assignable to parameter of type 'string'

function getFirstResults<T> (result: T[]): T {
    return result[0];
}

let firstCode = getFirstResults<number>([200, 404, 500]);
let firstTest = getFirstResults<string>(["Login", "Signup", "Cart"]);

console.log(firstCode); // Output: 200
console.log(firstTest); // Output: "Login"