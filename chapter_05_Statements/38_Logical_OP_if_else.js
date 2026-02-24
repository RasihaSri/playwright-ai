let username = "Dev";
let password = "Secure123456";
let isAccountLocked = false;

if ((username === "Dev" && password === "Secure123456") && !isAccountLocked) {
    console.log("Allowed to enter");
} else {
    console.log("Not allowed to enter");
}