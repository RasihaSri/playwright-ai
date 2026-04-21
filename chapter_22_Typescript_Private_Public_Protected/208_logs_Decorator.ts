// function LogStep1(target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
//     let original = descriptor.value;
//     descriptor.value = function (...args: any[]) {
//         console.log(`Step: ${String(propertyKey)} ( ${args.join(", ")} )`);
//         return original.apply(this, args);
//     };
// }

class Calculator {
    @LogStep
    add (a: number, b: number) {
        return a + b;
    }
}

const calculator = new Calculator();
console.log(calculator.add(2, 3)); // Step: add ( 2, 3 ) \n 5