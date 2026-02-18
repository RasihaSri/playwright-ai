let a = "Pramod";
if (true){
    // console.log(a); // local variable, TDZ starts here
    let a = "Dutta";
    console.log(a);
}
console.log(a);