let value = "5";

switch (value) {
    case 5:
        console.log("This is the number 5");
        break;
    case "5":
        console.log("This is the string '5'");
        break;
    default:
        console.log("Value does not match any case");
}   
// Output: String "5" matched
// Switch uses strict equality (===) for comparison, so the number 5 and string "5" are treated as different cases.
// "5" !== 5, so the case for "5" is executed, while the case for 5 is ignored.