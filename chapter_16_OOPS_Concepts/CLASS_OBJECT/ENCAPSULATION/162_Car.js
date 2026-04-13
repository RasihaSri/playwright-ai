class Car {
    #engine;

    constructor(name, engineName) {
        this.name = name;
        this.#engine = engineName;
    }

    getEngine() {
        return this.#engine;
    }
    setEngine(newEngine) {
        this.#engine = newEngine;
    }

}

let tesla = new Car ("Tesla", "V8");
console.log (tesla.getEngine()); // V8
tesla.setEngine("V9");
console.log (tesla.getEngine()); // V9