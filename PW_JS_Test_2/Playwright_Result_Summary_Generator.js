// You receive an array of Playwright step result objects in the format `{ name, status, durationMs }`
// , where status can be `"passed"`, `"failed"`, or `"skipped"`. Write a JavaScript function that 
// prints a summary report with total steps, passed count, failed count, skipped count, total duration, 
// and a comma-separated list of failed step names.

// results = [{ name: "open login", status: "passed", durationMs: 400 }, 
// { name: "fill form", status: "failed", durationMs: 700 }, 
// { name: "submit", status: "skipped", durationMs: 0 }]

let results = [{ name: "open login", status: "passed", durationMs: 400 }, 
{ name: "fill form", status: "failed", durationMs: 700 }, 
{ name: "submit", status: "skipped", durationMs: 0 }];

function generateSummaryReport(results) {
    total_steps = results.length;
    passed_count = results.filter(result => result.status === "passed").length;
    failed_count = results.filter(result => result.status === "failed").length;
    skipped_count = results.filter(result => result.status === "skipped").length;
    total_duration = results.reduce((sum, result) => sum + result.durationMs, 0);
    failed_steps = results.filter(result => result.status === "failed").map(result => result.name).join(", ");
}

generateSummaryReport(results);

console.log(`Total Steps: ${total_steps}`);
console.log(`Passed: ${passed_count}`);
console.log(`Failed: ${failed_count}`);
console.log(`Skipped: ${skipped_count}`);
console.log(`Total Duration: ${total_duration} ms`);
console.log(`Failed Steps: ${failed_steps}`);