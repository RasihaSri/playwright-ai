let grid = [
    [10,20,30],
    [40,50,60],
    [70,80,90]
];

// 3x3 grid

// Access - [row][column]
console.log(grid[0][0]); // 10
// grid[2][1] = 800; // update
// grid[1][2] = 600; // update

grid[0][0] = 100; // update
console.log(grid[0][0]); // 100
console.log(grid);

console.log(grid.length); // 3 - number of rows
console.log(grid[0].length); // 3 - number of columns in first row

console.log (grid[grid.length - 1][grid[0].length - 1]); // update last element
// grid [2][2];

let testMatrix = [
    ["login", "pass", 200],
    ["checkout", "fail", 404],
    ["search", "pass", 100]
];

for (let i = 0; i < testMatrix.length; i++) {
    for (let j = 0; j < testMatrix[i].length; j++) {
        console.log (testMatrix[i][j] + " ");
    }
    console.log(); // new line after each row
} 

console.log ("-----------------------------");

// for of loop

for (let row of testMatrix) {
    for (let cell of row) {
        process.stdout.write(cell + " ");
    }
    console.log(); // new line after each row
}

console.log ("-----------------------------");

// forEach loop

testMatrix.forEach(function (row) {
    row.forEach(function (cell) {
        process.stdout.write(cell + " ");
    });
    console.log(); // new line after each row
});

console.log ("-----------------------------");