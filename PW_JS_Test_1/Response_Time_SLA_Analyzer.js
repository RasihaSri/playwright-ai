let responseTimes = [120, 230, 450, 510, 180, 620];
let totalRequests = responseTimes.length;
console.log(`Total Requests: ${totalRequests}`);
const SLA_LIMIT = 500;
let count = 0;
let min, max, avg, slaBreaches = 0;

while (count < totalRequests) {
    min = Math.min(...responseTimes);
    max = Math.max(...responseTimes);
    avg = responseTimes.reduce((a, b) => a + b, 0) / responseTimes.length;
    if (responseTimes[count] > SLA_LIMIT) {
        slaBreaches++;
    }
    count++;
}

console.log(`Total Requests: ${totalRequests} Min Response: ${min} ms Max Response: ${max} ms
         Avg: ${avg.toFixed(2)} ms SLA Breaches: ${slaBreaches} 
         (${((slaBreaches / totalRequests) * 100).toFixed(2)}%) Overall Status: ${slaBreaches > 0 ? "SLA Violated" : "SLA Met"}`);