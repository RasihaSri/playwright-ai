function makeCounter (start = 0) {
    let count = start; // count is a local variable that is accessible to the returned function

    // function increment() {
    //     count++; // increment the count variable
    // }

    // function decrement() {
    //     count--; // decrement the count variable
    // }

    // function getCount() {
    //     return count; // return the current value of count
    // }

    return {
        increment() {count++;}, // increment the count variable
        decrement() {count--;}, // decrement the count variable
        getCount() {return count;} // return the current value of count
    }
}
let counter = makeCounter(5); // Create a counter starting at 5
counter.increment();
counter.increment();
console.log(counter.getCount()); // 7, because we incremented the count twice
counter.decrement();
console.log(counter.getCount()); // 6, because we decremented the count once