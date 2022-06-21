//https://www.hackerrank.com/challenges/truck-tour/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign
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
 * Complete the 'truckTour' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY petrolpumps as parameter.
 */

function truckTour(petrolpumps) {
    // loop over the matrix row by row
    // each row represents a petrol pump (column 0 is the amount of petrol and the second column is the cost to reach the next pump)
    // when the last pump/row is reached, then move back to first row and iterate
    // until you close the "circuit"
    let start = -1;
    let i = 0;
    let petrol = 0;
    while(start != i) {
        petrol += petrolpumps[i][0];
        const cost = petrolpumps[i][1];
        if (cost < petrol) { //can reach the next, so let's keep going
            if (start === -1)
                start = i;
            if (i === petrolpumps.length - 1) {
                i = 0;
            } else {
                i++;
            }
            petrol -= cost;
        } else { //can't reach the next, so let's try next pump to be the starting point
            if (i === petrolpumps.length - 1) {
                i = 0;
            } else {
                i++;
            }
            if (i === start) return -1;
            start = -1;
            petrol = 0;
        }
    }
    return start;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let petrolpumps = Array(n);

    for (let i = 0; i < n; i++) {
        petrolpumps[i] = readLine().replace(/\s+$/g, '').split(' ').map(petrolpumpsTemp => parseInt(petrolpumpsTemp, 10));
    }

    const result = truckTour(petrolpumps);

    ws.write(result + '\n');

    ws.end();
}
