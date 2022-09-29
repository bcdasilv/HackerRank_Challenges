//incomplete
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
 * Complete the 'minimalHeaviestSetA' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function minimalHeaviestSetA(arr) {
    /**
     * Another brainstorm:
     * Sort the array: O(n log n)
     * Calculate the total: O(n)
     * Iterate over the sorted array backwards. (or sort the array descending)
     * Take the min number of elements that their sum is greater than the remainder of the array sum
     * (sum > total - sum)
     * 
     * Final runtime complexity: O(n * log n + (2n))
     * There's probably a better way to do it in terms of runtime complexity.
     * */    
    const arr_A = [];
    let sum_A = 0;
    let total = 0;
    arr.sort( (a, b) => {
        if (a > b) { //sorting descending order
            return -1;//a before b
        } else {
            return 1;//b before a
        }
    });
    
    total = arr.reduce( (a, b) => { return a+b }, 0);
    // console.log(arr);
    // console.log(`Total is ${total}`);
    
    for (let i = 0; i < arr.length; i++) {
        sum_A += arr[i];
        arr_A.unshift(arr[i]);
        if (sum_A > total - sum_A) {
            return arr_A;
        }
    }    
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    let arr = [];

    for (let i = 0; i < arrCount; i++) {
        const arrItem = parseInt(readLine().trim(), 10);
        arr.push(arrItem);
    }

    const result = minimalHeaviestSetA(arr);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
