// 1D Array, list - duplicate element
let results = ["pass", "fail", "pass"]

// 2D - array of arrays, table, matrix
let matrix = [
]

let matrix_2D = [
    [1,2,3,4]
]

let grid = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
        console.log(grid[i][j]);
    }
}

// 3D - array of arrays of arrays, cube
let cube = [
    [
        [1,2],
        [3,4]
    ]
]       

// Right Triangle star pattern

let n = 5;
for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}

// Right triangle 1,2,3 pattern

for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += j + " ";
    }
    console.log(row);
}

// Right triangle pattern upto 10
// 1
// 2 3
// 4 5 6
// 7 8 9 10

let count = 1;
for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += count + " ";
        count++;
    }
    console.log(row);
}

// Right triangle pattern upto 10
// 1
// 2 4
// 3 6 9
// 4 8 12 16
// 5 10 15 20 25

for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += (i * j) + " ";
    }
    console.log(row);
}   