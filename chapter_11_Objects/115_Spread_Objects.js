const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const copy = {...obj1}; // creates a shallow copy of obj1, not a reference
copy.a = 99; // changing copy does not affect obj1
console.log(copy); // Output: { a: 99, b: 2 }
console.log(obj1); // Output: { a: 1, b: 2 }

const merged = { ...obj1, ...obj2 };
console.log(merged); // Output: { a: 1, b: 2, c: 3, d: 4 }

// this keyword
const user = {
    name: 'Pramod',
    sayMyName(lastName) {
        this.name += lastName; // this refers to the current object (user)
        return this.name; // allows method chaining
    }
}
console.log (user.sayMyName(' Dutta')); // Output: Pramod Dutta