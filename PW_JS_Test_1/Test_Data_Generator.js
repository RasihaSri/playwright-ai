// As an SDET, you frequently need to generate test data for form testing. 
// Write a JavaScript program that generates test user data using a for loop. 
// Each user should have a unique ID (USR-0001 format), name, email, and role 
// (cycling through: admin, editor, viewer, tester, manager). Every 3rd user should be inactive 
// (edge case testing). Demonstrate proper use of var (global counter), let (loop variables), and 
// const (fixed values).

const users = 8;
const roles = ["admin", "editor", "viewer", "tester", "manager"];
for (let i = 1; i<= users; i++) {
    let id = "USR-000" + i;
    let name = `TestUser_${i}`;
    let email = `testuser${i}@testingacademy.com`;

    let role = roles[(i - 1) % roles.length];
    let status = (i % 3 === 0) ? "INACTIVE" : "ACTIVE";
    console.log(`${id} | ${name} | ${email} | ${role} | ${status}`);
}
