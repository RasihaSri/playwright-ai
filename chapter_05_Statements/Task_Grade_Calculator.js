/* Write a program that calculates and displays the letter grade for a given numerical score (e.g., A, B, C, D, or F) based on the following grading scale:

A: 90-100

B: 80-89

C: 70-79

D: 60-69

F: 0-59 */

function gradeCalculator (score) {
    if (score >= 90 && score <= 100) {
        console.log("Grade: A");
    } else if (score >= 80 && score < 90) {
        console.log("Grade: B");
    } else if (score >= 70 && score < 80) {
        console.log("Grade: C");
    } else if (score >= 60 && score < 70) {
        console.log("Grade: D");
    } else if (score >= 0 && score < 60) {
        console.log("Grade: F");
    } else {
        console.log("Invalid score. Please enter a score between 0 and 100.");
    }
}

gradeCalculator(95); // Grade: A
gradeCalculator(85); // Grade: B
gradeCalculator(75); // Grade: C
gradeCalculator(65); // Grade: D
gradeCalculator(55); // Grade: F
gradeCalculator(110); // Invalid score. Please enter a score between 0 and 100.