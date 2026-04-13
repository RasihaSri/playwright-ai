let unknown1: unknown = "hello";

if (typeof unknown === "string") {
    console.log ("Hi")
}

let message1:string = "Hello";

let username: string;
let userId: number;

// Function Annotations
function greet1(name: string): string {
    return `Hello, ${name}`;
}

// Arrow Function Annotations
const multiply = (a: number, b: number): number => a * b;

// Object Annotations
let user: { name: string; age: number } = {
    name: "John",
    age: 30
};