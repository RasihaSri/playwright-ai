enum Severity {
    Low,
    Medium,
    High,
    Critical
}

console.log (Severity.High);

function needsImmediateAttention(severity: Severity): boolean {
    return severity >= Severity.High;
}

console.log("Low Urgent?" , needsImmediateAttention(Severity.Low));
console.log("Critical Urgent?" , needsImmediateAttention(Severity.Critical));
console.log("Severity name: ", Severity[2]);

enum Environment {
    Dev = "https://dev.api.com",
    Staging = "https://staging.api.com",
    QA = "https://qa.api.com",
    Prod = "https://api.com"
}

console.log("QA URL: ", Environment.QA);