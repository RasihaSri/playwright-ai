interface BasePage {
    url: string;
    title: string;
}

interface LoginPage extends BasePage {
    usernameSelector: string;
    passwordSelector: string;
    loginButtonSelector: string;
}

interface FreeTrialPage extends BasePage {
    usernameSelector: string;
    submitButtonSelector: string;
}

let loginPage: LoginPage = {
    url: "/login",
    title: "Login Page",
    usernameSelector: "#username",
    passwordSelector: "#password",
    loginButtonSelector: "#loginBtn"
};

let freeTrialPage: FreeTrialPage = {
    url: "/free-trial",
    title: "Free Trial Page",
    usernameSelector: "#username",
    submitButtonSelector: "#submit"
};

console.log("URL:", loginPage.url);
console.log("Title:", loginPage.title);
console.log("Username Selector:", loginPage.usernameSelector);
console.log("Password Selector:", loginPage.passwordSelector);
console.log("Login Button Selector:", loginPage.loginButtonSelector);

console.log("------------------------------");

console.log("URL:", freeTrialPage.url);
console.log("Title:", freeTrialPage.title);
console.log("Username Selector:", freeTrialPage.usernameSelector);
console.log("Submit Button Selector:", freeTrialPage.submitButtonSelector);