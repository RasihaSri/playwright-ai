// Access Modifiers in TypeScript

// TypeScript has three main access modifiers:

// public (default)
// private
// protected
// 1. public (Default)

// Accessible everywhere — inside class, outside class, even in other files.

class User1 {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const u = new User1("Rasiha");
console.log(u.name); // ✅ Works

// 👉 If you don’t write anything, it’s automatically public.

// 2. private

// Accessible only inside the same class.

class User {
    private password: string;

    constructor(password: string) {
        this.password = password;
    }

    showPassword() {
        return this.password; // ✅ allowed inside class
    }
}

const u2 = new User("1234");
// console.log(u2.password); // ❌ Error - cannot access private member via object

// 👉 Even child classes cannot access private members.

// 3. protected

// Accessible:

// ✅ Inside the class
// ✅ Inside child (derived) classes
// ❌ NOT accessible outside (even via object)
class Person1 {
    protected age: number;

    constructor(age: number) {
        this.age = age;
    }
}

class Employee1 extends Person1 {
    showAge() {
        console.log(this.age); // ✅ allowed (child class)
    }
}

const emp1 = new Employee1(25);
emp1.showAge();

// console.log(emp1.age); // ❌ Error - cannot access protected member via object

// ⚠️ Important Question You Asked
// 👉 What happens with protected in a different folder / export?

// This is where many people get confused.

// ✅ Key Rule:

// protected has nothing to do with folders or files
// It depends only on inheritance (extends).

// Example with Different Files
// 📁 Person.ts
// export class Person2 {
//     protected age: number;

//     constructor(age: number) {
//         this.age = age;
//     }
// }
// 📁 Employee.ts (different folder/file)
// import { Person2 } from "./Person2";

// export class Employee2 extends Person2 {
//     getAge() {
//         return this.age; // ✅ Works (because of inheritance)
//     }
// }
// 📁 Test.ts
// import { Employee2 } from "./Employee";

// const emp2 = new Employee2(30);

// console.log(emp2.age); // ❌ Error - cannot access protected member via object, even in different file

// 🔥 Final Conclusion (Very Important)
// Modifier	Same Class	Child Class	Outside Class	Different File
// public	✅	✅	✅	✅
// private	✅	❌	❌	❌
// protected	✅	✅	❌	❌ (unless extended)
// 🧠 Key Insight (What interviewer expects)
// protected is NOT about file access
// It is about inheritance access
// Even if it's in another folder/file:
// ✅ Works if extended
// ❌ Fails if accessed directly
// ✔️ What You Can Say (Short Answer)

// You can confidently say:

// "In TypeScript, public is accessible everywhere, private is restricted to the same class, and protected allows access within the class and its subclasses. Even across different files or folders, protected works only through inheritance and cannot be accessed directly from an object."