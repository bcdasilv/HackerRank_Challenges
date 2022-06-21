//https://www.hackerrank.com/challenges/sherlock-and-squares/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign
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
 * Complete the 'squares' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER a
 *  2. INTEGER b
 */

function squares(a, b) {
    //Return the number of 'square integers' between a and b
    // A square integer is an integer that is a square of another integer
    // In other words, the square root of a square integer is another integer
    
    // Solution 1: For each number between a and b
    // take the square root and check if the result is an integer
    // Brute force: exceeds the time limit
    // let count = 0;
    // for (let n = a; a <= b; n++) {
    //     const res = Math.sqrt(n);
    //     if (Number.isInteger(res)) 
    //         count++;
    // }
    // return count;
    
    //Solution 2: find the first square integer in the range
    // Take the square root of that number, let it be 's'
    // Increment s in a loop. Each iteration, if s*s is <= b
    // increment the count, otherwise, finish. Count has the result.
    let count = 0;
    let s = 0;
    for (let n = a; a <= b && count === 0; n++) {
        s = Math.sqrt(n);
        if (Number.isInteger(s)) 
            count++;
    }
    
    while (s*s <= b) {
        s++;
        count++;
    }
    count--;
    return count;    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

        const a = parseInt(firstMultipleInput[0], 10);

        const b = parseInt(firstMultipleInput[1], 10);

        const result = squares(a, b);

        ws.write(result + '\n');
    }

    ws.end();
}
