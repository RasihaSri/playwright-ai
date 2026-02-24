// Switch
// 0 - Sunday, 1 - Monday, 2 - Tuesday, 3 - Wednesday, 4 - Thursday, 5 - Friday, 6 - Saturday
let day = 3;

switch (day) {
    case 0:
        console.log("Today is Sunday - Rest Day");
    case 1:
        console.log("Today is Monday - Sprint Planning");             
    case 2:
        console.log("Today is Tuesday - Development");
    case 3:
        console.log("Today is Wednesday - Code Review");
    case 4:
        console.log("Today is Thursday - Testing");
    case 5:
        console.log("Today is Friday - Deployment & Retrospective");
    case 6:
        console.log("Today is Saturday - Maintenance");       
    default:
        console.log("Invalid day");
}
