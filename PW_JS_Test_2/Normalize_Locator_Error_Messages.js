// Given a raw Playwright error message string, write a function that trims extra spaces, 
// converts the message to lowercase, collapses multiple spaces into a single space, and 
// prints a category. Use `TIMEOUT` if the normalized message contains `"timeout"`, 
// `LOCATOR` if it contains `"locator"`, otherwise `GENERAL`.

// rawMessage = " Locator not found after TIMEOUT "

let rawMessage = " Locator not found after TIMEOUT ";

function normalizeLocatorErrorMessage (rawMessage) {
    let normalizedMessage = rawMessage.trim().toLowerCase().replace(/\s+/g, " ");
    if (normalizedMessage.includes("timeout")) {
        console.log (`Normalized: ${normalizedMessage} \nCategory: TIMEOUT`);
    } else if (normalizedMessage.includes("locator")) {
        console.log (`Normalized: ${normalizedMessage} \nCategory: LOCATOR`);
    } else {
        console.log (`Normalized: ${normalizedMessage} \nCategory: GENERAL`);
    }
}

normalizeLocatorErrorMessage(rawMessage);