// Score 90-100 -> A
// Score 80-89 -> B
// Score 70-79 -> C
// Score 60-69 -> D
// Score 0-59 -> F
// Invalid score -> Invalid Score

let grade;
let score = 85;

if (typeof score !== "number" || score < 0 || score > 100) {
    console.log("Are you fool, why are you giving score as not a number");
}

if (score >=90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else if (score >= 60) {
    grade = "D";
} else if (score >= 0) {
    grade = "F";
} else {
    grade = "Invalid Score";
}
console.log("Your grade is: " + grade + " for the score of: " + score);