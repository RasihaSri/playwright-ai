let status = 0;
switch (status) {
    case false:
        console.log("False matched");
        break;
    case 0:
        console.log("0 matched");   
        break;
}

// Output: "0 matched" (0 === 0, NOT 0 == false)
// Switch uses strict equality (===) for comparison, so the number 0 and boolean false are treated as different cases.
// 0 !== false, so the case for 0 is executed, while the case for false is ignored.