// void
function sayHello(msg: string): void {
    console.log(`msg: ${msg}`);
}

// Function annotations
function greet(name: string): string {
    return `Hello, ${name}`;
}

// never - function never returns (throws error or infinite loop)
function throwError(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) {
        console.log("Looping...");
    }       
}