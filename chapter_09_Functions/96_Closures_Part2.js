function maxRetryTracker (max) {
    let attempts = 0;

    function tryAgain(testName) {
        attempts++;
        if (attempts > max) {
            return `${testName} has exceeded the maximum retries ${max}`;
        }

        return `Attempt ${attempts}/${max} for ${testName}`;
    }

    return tryAgain;
}

let retry = maxRetryTracker(3);
console.log(retry("Login")); // Attempt 1/3 for Login Test
console.log(retry("Login")); // Attempt 2/3 for Login Test
console.log(retry("Login")); // Attempt 3/3 for Login Test
console.log(retry("Login")); // Login Test has exceeded the maximum retries 3