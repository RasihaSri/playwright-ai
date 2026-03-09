let scores = [75, 92, 78, 90, 88];

// Map -> transforms every element , returns new Array
let grades = scores.map(score => score > 80 ? "pass" : "fail");
console.log(grades); // ["fail", "pass", "fail", "pass", "pass"]

// Filter -> keeps the element that pass a test, returns new Array
let passingScores = scores.filter(score => score >= 80);
console.log(passingScores); // [92, 90, 88]

// Reduce -> accumulates to a single value
let totalScore = scores.reduce((total, score) => total + score, 0);
console.log(totalScore); // 423

// Flat-> flattens nested arrays into a single array
let nested = [[1, 2], [3, 4], [5, 6]];
let flat = nested.flat();
console.log(flat); // [1, 2, 3, 4, 5, 6]