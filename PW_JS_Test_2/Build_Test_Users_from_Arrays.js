//Write a JavaScript function that receives two arrays: one with names and one with roles. 
// Return a new array of user objects in the format `{ username, email, role }`. 
// The username should be lowercase with spaces replaced by underscores, and the email 
// should use the domain `@playwrightbatch.com`.

// names = ["Amit Kumar", "Neha Singh"], roles = ["admin", "viewer"]

let names = ["Amit Kumar", "Neha Singh"];
let roles = ["admin", "viewer"];

function buildTestUsers(names, roles) {
    return names.map((name, index) => {
        let userName = name.toLowerCase().replace(/\s+/g, "_");
        let email = `${name}`.toLowerCase().replace(/\s+/g, "_") + "@playwrightbatch.com";
        let role = roles[index] || "user";
        return {username: userName, email: email, role: role};
    })

}

console.log(buildTestUsers(names, roles));