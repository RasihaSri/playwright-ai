// Type 2 functions

// So with argument/parameter  but no return type

function greetByName(name) { // parameter name
    console.log(`Hello, ${name}!`);
}

function beggar (money) {
    console.log(`I have ${money} dollars, can you spare some change?`);
}

let returnSomething = beggar(5); // I have 5 dollars, can you spare some change? // argument 5 is passed to the function
console.log(returnSomething); // I have 5 dollars, can you spare some change? // undefined, because the function does not return anything


const name1 = greetByName("Rasiha"); // Hello, Rasiha // argument "Rasiha" is passed to the function
console.log(name1); // undefined, because the function does not return anything