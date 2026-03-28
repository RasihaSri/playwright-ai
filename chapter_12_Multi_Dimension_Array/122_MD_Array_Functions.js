// 2D Array - Common operations

let scores = [
    [85, 90, 78],
    [60, 45, 70],
    [95, 88, 92]
];

let rowSums = scores.map(row => row.reduce((a, b) => a + b, 0));
console.log("Row sums:", rowSums);

let suiteResults = [
    ["search-pass", "filter-fail", "sort-pass"],
    ["checkout-fail", "payment-fail", "confirm-pass"]
];

for (let i = 0; i < suiteResults.length; i++) {
    for (let j = 0; j < suiteResults[i].length; j++) {
        if (suiteResults[i][j].includes("fail")) {
            console.log(suiteResults[i][j]);
        }
    }
}

let execTimes = [
    [120, 340, 89,  450], // dev
    [200, 410, 100, 520], // staging
    [180, 390, 95, 490]  // prod
];

// 3x4 grid - 3 environments, 4 test cases