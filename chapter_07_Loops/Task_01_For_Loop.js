// Print hello five times
for (let i = 0; i < 5; i++) {
    console.log("Hello");
}

// Print numbers from 1 to 10
for (let j=1;j<=10;j++) {
    console.log(j);
}

// Print even numbers from 1 to 20
for (let a=1;a<=20;a++) {
    if (a%2 === 0) {
        console.log(a);
    }
}

// Print the sum of first 10 natural numbers
let sum = 0;
for(let b = 1; b <= 10; b++ ) { // 1+2+3+4+5+6+7+8+9+10
    sum = b + sum;
}
console.log(sum);

// Print the multiplication table of 5
let n = 10;
for(let c = 1; c <= n; c++) {
    multiply = c * 5;
    console.log(multiply);
}