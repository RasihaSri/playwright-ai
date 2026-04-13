// Grandfather -> Father -> Son
// BasePage -> AuthPage -> AdminPage

class BasePage {

    constructor (name) {
        this.name = name;
    }

    open () {
        console.log ("[OPEN] " + this.name);
    }
}

class AuthPage extends BasePage {
    login (user) {
        console.log ("[LOGIN] " + user);
    }
}

class AdminPage extends AuthPage {
    constructor () {
        super("Admin Panel")
    }

    manageUsers () {
        console.log ("[ADMIN] Managing users");
    }   
}

let admin = new AdminPage();
let auth = new AuthPage();
// admin.open(); // [OPEN] Admin Panel
// admin.login("superadmin"); // [LOGIN] AdminUser
// admin.manageUsers(); // [ADMIN] Managing users
auth.manageUsers(); // TypeError: auth.manageUsers is not a function
auth.login("admin"); // [LOGIN] admin
auth.open(); // [OPEN] Admin Panel