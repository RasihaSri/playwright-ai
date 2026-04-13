let statusCode: number[] = [200, 201, 404, 500];

let testSuites: string[] = ["Smoke", "Regression", "Sanity"];

console.log("Status Codes:", statusCode);
console.log("Suites:", testSuites);

let testResult: { name: string; status: string; duration: number  } = {
    name: "Login Test",
    status: "Passed",
    duration: 1200
};

console.log(testResult.name + " → " + testResult.status + " (" + testResult.duration + "ms)");