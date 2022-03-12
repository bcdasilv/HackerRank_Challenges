// Incomplete

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
 * Complete the 'flippingMatrix' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY matrix as parameter.
 */

function flippingMatrix(matrix) {
    //get the max on each row, take the index 
    //and reverse it if it's not in the upper left quadrant
    let maximalSum = 0;
    let rotatedMatrix;

    for (let i = matrix.length/2; i < matrix.length; i++){
        const colMaxNumRow = colOfMaxNumRow(matrix, i);
        if (!isInUpperLeftQuadrant(colMaxNumRow)) {
            rotatedMatrix = reverseColumn(matrix, colMaxNumRow);
            if (colMaxNumRow >= matrix.length/2)
                rotatedMatrix = reverseRow(rotatedMatrix, colMaxNumRow);
        }
        // let rotatedMatrix = reverseRow(matrix, i);
        // rotatedMatrix = reverseColumn(rotatedMatrix, i); 
        // const sum = sumMatrix(rotatedMatrix)
        // if (sum >= maximalSum) {
        //     maximalSum = sum;
        // }
    }

    for (let j = matrix.length/2; j < matrix.length; j++) {
        const rowMaxNumRow = rowOfMaxNumCol(matrix, j);
        if (!isInUpperLeftQuadrant(rowMaxNumRow)) {
            rotatedMatrix = reverseRow(matrix, rowMaxNumRow);
            if (rowMaxNumRow >= matrix.length/2)
                rotatedMatrix = reverseRow(rotatedMatrix, colMaxNumRow);
        }        
    }
    return sumMatrix(rotatedMatrix);
}

function isInUpperLeftQuadrant(matrix, index) {
    return (index < matrix.length/2);
}

function colOfMaxNumRow(matrix, row) {
    let max = 0;
    let colIndex = 0;
    for (index in matrix) {
        if (matrix[row][index] > max) {
            max = matrix[row][index];
            colIndex = index;
        }
    }
    return colIndex;
}

function rowOfMaxNumCol(matrix, col) {
    let max = 0;
    let rowIndex = 0;
    for (index in matrix) {
        if (matrix[index][col] > max) {
            max = matrix[index][col];
            rowIndex = index;
        }
    }
    return rowIndex;
}

// function reverseColumn(matrix, columnIndex) {
//     let j = matrix.length - 1;
//     for (let i = 0; i < matrix.length; i++) {
//         const temp = matrix[i][columnIndex];
//         matrix[i][columnIndex] = matrix[j][columnIndex];
//         matrix[j][columnIndex] = temp;
//         j--;
//     }
//     return matrix;
// }

// function reverseRow(matrix, rowIndex) {
//     let j = matrix.length - 1;
//     for (let i = 0; i < matrix.length; i++) {
//         const temp = matrix[rowIndex][i];
//         matrix[rowIndex][i] = matrix[rowIndex][j];
//         matrix[rowIndex][j] = temp;
//         j--;
//     }
//     return matrix;
// }

// function reverseRow(matrix, rowIndex) {
//     let j = matrix.length - 1;
//     for (let i = 0; i < matrix.length; i++) {
//         const temp = matrix[rowIndex][i];
//         matrix[rowIndex][i] = matrix[rowIndex][j];
//         matrix[rowIndex][j] = temp;
//         j--;
//     }
//     return matrix;
// }

function sumMatrix(matrix){
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            sum+= matrix[i][j];
        }
    }
    return sum;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const n = parseInt(readLine().trim(), 10);

        let matrix = Array(2 * n);

        for (let i = 0; i < 2 * n; i++) {
            matrix[i] = readLine().replace(/\s+$/g, '').split(' ').map(matrixTemp => parseInt(matrixTemp, 10));
        }

        const result = flippingMatrix(matrix);

        ws.write(result + '\n');
    }

    ws.end();
}
