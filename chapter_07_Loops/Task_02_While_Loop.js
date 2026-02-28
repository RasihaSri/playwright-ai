// Print "Playwright" 5 times 
let a = 0;
while (a < 5) {
    console.log("Playwright");
    a++;
}

// Print numbers from 1 to 10
let b = 1;
while (b <= 10) {
    console.log(b);
    b++;
}

// Print even numbers from 1 to 20
let c = 1;
while (c <= 20) {
    if (c % 2 === 0) {
        console.log (c);
    }
    c++;
}

// Print the sum of first 10 natural numbers
let d = 10;
let sum = 0;
while (d > 0) {
    sum = sum + d;
    d--;
}
console.log(sum);

// Print the multiplication table of 7
let e = 7;
let n = 0;
while (n <= 10) {
    let multiply = n * e;
    console.log(multiply);
    n++;
}