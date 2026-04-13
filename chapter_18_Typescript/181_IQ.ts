function buildEndpoint(base: string, path: string): string {
    return base + path;
}

function isSuccessCode(code: number): boolean {
    return code >= 200 && code < 300;
}

function logTestStep(step: string): void {
    console.log("[STEP] " + step);
}

console.log(buildEndpoint("https://api.com", "/users")); // Output: https://api.com/users
console.log("200 is success:", isSuccessCode(200)); // Output: 200 is success: true
console.log("404 is success:", isSuccessCode(404)); // Output: 404 is success: false
logTestStep("Navigate to login page"); // Output: [STEP] Navigate to login page