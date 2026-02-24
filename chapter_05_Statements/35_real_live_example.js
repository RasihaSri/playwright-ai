let isLoggedIn = true;
let userRole = "editor";
// app.vwo.com -> viewer, editor and admin
// viewer -> can only view the content
// editor -> can view and edit the content
// admin -> can view, edit and delete the content

if (isLoggedIn) {
  if (userRole === "admin") {
    console.log("You can view, edit and delete the content");   
  } else if (userRole === "editor") {
    console.log("You can view and edit the content");
  } else if (userRole === "viewer") {
    console.log("You can only view the content");
  } else {
    console.log("Invalid user role");
  }
}
else {
    console.log("You are not logged in!..");
}