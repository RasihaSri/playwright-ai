// let a = 10;
// let b = ++a; // Pre - (a) -> 11, a -> 11
// console.log(a); // 11
// console.log(b); // 11

// Exp and Result Table
// Line No |  a |  Result b
// 1       | 10 |  NA
// 2       | 11 | 11
// 3       | 11 - print | 11
// 4       | 11 | 11 - print

// let a = 10;
// console.log (a++ + a); // 10 + 11 -> 21
// A+B -> A -> a++ (ExpA - 10, a->11)
// +
// B->11, A->11,
// Exp A. + Exp B -> 10 + 11 -> 21

// ERT
// Line No |  a |  Result
// 13       | 10 | NA
// 14       | 11 | 21 - print

// let a = 10;
// console.log (a++ + ++a); // 10 + 12 -> 22
// console.log(a);

// A+B
// ExpA -> 10, a-> 11
// +
// ExpB -> 12, a-> 12
// ExpA. + ExpB -> 10 + 12 -> 22
// a-> 12

// let a = 10;
// console.log(++a + ++a);
// console.log(a);

let a = 10;
let r = a--;
let r2 = --a;
console.log(r);
console.log(r2);
