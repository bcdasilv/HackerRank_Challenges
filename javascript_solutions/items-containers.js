//Incomplete?
/**
 * Example:
 * s = "|**|*|*"
 * startIndices = [1,1]
 * endIndices = [5,6]
 * result = [2,3]
 * 
 * Solved below but not efficiently. TODO: reduce time complexity 
*/
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
 * Complete the 'numberOfItems' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER_ARRAY startIndices
 *  3. INTEGER_ARRAY endIndices
 */

function numberOfItems(s, startIndices, endIndices) {
    const result = [];
    for (let i = 0; i < startIndices.length; i++) {
        const s_Start = startIndices[i] - 1;
        const s_End = endIndices[i] - 1;
        const count = countItems(s, s_Start, s_End);
        result.push(count);
    }
    return result;
}

function countItems(s, start, end) {
    let count = 0;
    let subCount = 0;
    let isClosed = true;
    // console.log(`Analyzing: ${s}`);
    // console.log(`Substring: ${s.slice(start, end+1)}`);
    for(let i = start; i <= end; i++) {
        const symbol = s.charAt(i);
        if (symbol === "|" && isClosed) {
            isClosed = false;
            subCount = 0;
        } else if (symbol === "|" && !isClosed) { 
            // isClosed = true;
            count += subCount;
            subCount = 0;
        } else if (symbol === "*" && isClosed) { 
            //Can even happen? yes, beginning with *
        } else if (symbol === "*" && !isClosed) { 
            subCount++;
        }                   
    }
    return count;

    /**
     * Run the string and save on a map
     * all the counts for each start-end pair.
     * For instance, take the example in the prompt:
     * "03": 2,
     * "35": 1
     * "05": 3
     * 
     * "16" -> 1
     */
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const startIndicesCount = parseInt(readLine().trim(), 10);

    let startIndices = [];

    for (let i = 0; i < startIndicesCount; i++) {
        const startIndicesItem = parseInt(readLine().trim(), 10);
        startIndices.push(startIndicesItem);
    }

    const endIndicesCount = parseInt(readLine().trim(), 10);

    let endIndices = [];

    for (let i = 0; i < endIndicesCount; i++) {
        const endIndicesItem = parseInt(readLine().trim(), 10);
        endIndices.push(endIndicesItem);
    }

    const result = numberOfItems(s, startIndices, endIndices);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
