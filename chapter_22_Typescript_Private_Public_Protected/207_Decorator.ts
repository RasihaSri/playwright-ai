function LogStep (target: any, methodName: string, descriptor: PropertyDescriptor) {
    let original = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`Step: ${methodName} ( ${args.join(", ")} )`);
        return original.apply(this, args);
    };

}