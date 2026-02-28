// In automation testing, API calls sometimes fail due to network issues. 
// Write a JavaScript program that simulates retrying a failed API call using a do...while loop. 
// The program should retry a maximum of 5 times. Simulate random success/failure using Math.random() 
// (40% chance of success: randomValue > 0.6). Log each attempt and print the final result.

const MAX_ATTEMPTS = 5;
let testStatus;
let attempts = 0;
do {
    testStatus = Math.random() > 0.6 ? `SUCCESS (Response 200 OK) API call PASSED after ${attempts + 1} attempt(s).` 
    : `FAILED (Timeout/Error)`;// (40% chance of success: randomValue > 0.6)
    attempts++;
    console.log(`Attempt ${attempts}: ${testStatus}`);
    if (testStatus.startsWith("SUCCESS")) {
        break;
    }
} while (attempts < MAX_ATTEMPTS);