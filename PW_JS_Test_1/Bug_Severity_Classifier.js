// As a QA engineer, classify bugs based on two factors: frequency ("always", "often", "rarely")
//  and impact ("blocker", "major", "minor"). Write a JavaScript program using nested if-else that 
// prints the bug severity level.

// Classification Matrix:
// - always + blocker → P0 | always + major → P1 | always + minor → P2
// - often + blocker → P1 | often + major → P2 | often + minor → P3
// - rarely + blocker → P2 | rarely + major → P3 | rarely + minor → P4

let frequency = "always", impact = "blocker";
if (frequency === "always")
    if (impact === "blocker") {
    console.log("Bug Title: Checkout page crashes on applying coupon Frequency: always Impact: blocker Severity: P0 - Critical: Stop release immediately");
    } else if (impact === "major") {
    console.log("Bug Title: Checkout page crashes on applying coupon Frequency: always Impact: major Severity: P1 - High: Fix before release");
    } else if (impact === "minor") {
    console.log("Bug Title: Checkout page crashes on applying coupon Frequency: always Impact: minor Severity: P2 - Medium: Fix in next release");
    }
else if (frequency === "often")
    if (impact === "blocker") {
    console.log("Bug Title: Checkout page crashes on applying coupon Frequency: often Impact: blocker Severity: P1 - High: Fix before release");
    } else if (impact === "major") {
    console.log("Bug Title: Checkout page crashes on applying coupon Frequency: often Impact: major Severity: P2 - Medium: Fix in next release");
    } else if (impact === "minor") {
    console.log("Bug Title: Checkout page crashes on applying coupon Frequency: often Impact: minor Severity: P3 - Low: Fix in future release");
    }
else if (frequency === "rarely")
    if (impact === "blocker") {
    console.log("Bug Title: Checkout page crashes on applying coupon Frequency: rarely Impact: blocker Severity: P2 - Medium: Fix in next release");
    } else if (impact === "major") {
    console.log("Bug Title: Checkout page crashes on applying coupon Frequency: rarely Impact: major Severity: P3 - Low: Fix in future release");
    } else if (impact === "minor") {
    console.log("Bug Title: Checkout page crashes on applying coupon Frequency: rarely Impact: minor Severity: P4 - Trivial: Fix if time permits");
    }