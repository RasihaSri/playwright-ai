class Person {
    // Hide your childs
    #child1;
    #child2;

    constructor(name, ch1, ch2) {
        this.name = name;
        this.#child1 = ch1;
        this.#child2 = ch2;
    }

    mom () {
        return this.child1;
    }

    getChild1() {
        return this.#child1;
    }

    setChild1(newName) {
        this.#child1 = newName;
    }
}

let p = new Person("Pramod", "Vrad", "Jenny");
console.log(p.name); // undefined
// console.log(p.#child1); // Vrad

// console.log(p.mom()); // Vrad

console.log (p.getChild1()); // Vrad

p.setChild1("Virad Kumar");
console.log (p.getChild1()); // Vrad Kumar