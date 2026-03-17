// Write a function makeRateLimiter(limit) that returns a function.
// Each call to the returned function should track usage and return true if under limit
// false, when limit is exceeded

function makeRateLimiter(limit) {
    let call = 0;

    function check() {
        call++;
        return call <= limit;
        
    }
    return check;
}

let limiter = makeRateLimiter(3);
console.log(limiter()); // true, because it's the first call and under the limit
console.log(limiter()); // true, because it's the second call and under the limit
console.log(limiter()); // true, because it's the third call and under the limit
console.log(limiter()); // false, because it's the fourth call and exceeds the limit