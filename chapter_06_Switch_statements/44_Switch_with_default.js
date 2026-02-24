// Switch
// 0 - Sunday, 1 - Monday, 2 - Tuesday, 3 - Wednesday, 4 - Thursday, 5 - Friday, 6 - Saturday
let day = 10;

switch (day) {
    case 0:
        console.log("Today is Sunday - Rest Day");
        break;
    case 1:
        console.log("Today is Monday - Sprint Planning");             
        break;
    case 2:
        console.log("Today is Tuesday - Development");
        break;
    case 3:
        console.log("Today is Wednesday - Code Review");
        break;
    case 4:
        console.log("Today is Thursday - Testing");
        break;
    case 5:
        console.log("Today is Friday - Deployment & Retrospective");
        break;
    case 6:
        console.log("Today is Saturday - Maintenance");       
        break;
    default:
        console.log("Invalid day");
}
