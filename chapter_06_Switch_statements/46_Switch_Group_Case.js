let browser = "Edge";

switch (browser) {
    case "Chrome":
    case "Edge":
    case "Brave": 
    case  "Opera":
        console.log("Supported Browser");
        break;
    case "Firefox":
        console.log("Mozilla browser");
        break;
    case "Safari":
        console.log("Apple browser");
        break;
    default:
        console.log("Unsupported Browser");
}  