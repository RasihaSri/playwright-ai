const calculator = {
    value: 0,
    add (n) {
        this.value += n; // this refers to the current object
        return this; // allows method chaining
    },
    subtract (n) {
        this.value -= n;
        return this;
    }
}

console.log(calculator.add(5)); // Output: 5
console.log(calculator.subtract(2)); // Output: 3
console.log(calculator.add(10).subtract(4)); // Output: 9 (method chaining)