function LogStep (target: any, methodName: string, descriptor: PropertyDescriptor) {
    let original = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`Step: ${methodName} ( ${args.join(", ")} )`);
        return original.apply(this, args);
    };

}

function Role (role: string) {
    return function (constructor: Function) {
        constructor.prototype.role = role;
    };
}

@Role("admin")
class Admin {

}

const admin = new Admin();
console.log ((admin as any).role); // admin