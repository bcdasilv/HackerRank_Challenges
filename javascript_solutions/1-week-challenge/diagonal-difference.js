'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

// function diagonalDifference(arr) {
    //Solution with two for loops
//     if (!arr.length) return 0;
    
//     let primDiagonal = 0;
//     let secondDiagonal = 0;
//     let i = 0;
//     for (; i < arr.length; i++) {
//         primDiagonal += arr[i][i];
//     }
//     i = 0;
//     for (let j = arr.length - 1; j >= 0 ; j--) {
//         secondDiagonal += arr[i][j];
//         i++;
//     }
    
//     return (Math.abs(primDiagonal - secondDiagonal));
// }

//Better solution with only one for loop
function diagonalDifference(arr) {
    
    if (!arr.length) return 0;
    
    let primDiagonal = 0;
    let secondDiagonal = 0;
    let i = 0;
    let j = arr.length - 1;
    for (; i < arr.length; i++) {
        primDiagonal += arr[i][i];
        secondDiagonal += arr[j][i];
        j--;
    }
    
    return (Math.abs(primDiagonal - secondDiagonal));
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
