let x = 10;
switch(x){
    case 10: let b1 = 1;
    console.log(b1);
    break;
    case 10: let b2 = 2; // Allows duplicate case labels but will not execute due to the first case match
    console.log(b2);
    break;
}