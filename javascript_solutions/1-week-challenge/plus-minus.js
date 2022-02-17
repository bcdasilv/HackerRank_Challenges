// https://www.hackerrank.com/challenges/one-week-preparation-kit-plus-minus/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-one
'use strict';

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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    if (arr.length === 0) {
        console.log(0);
        console.log(0);
        console.log(0);        
    } else {
        let negRatio = 0;
        let posRatio = 0;
        let zeroRatio = 0;
        
        arr.forEach( (num, index) => {
            if (num === 0) {
                zeroRatio++;
            } else if (num >= 0) {
                posRatio++;
            } else {
                negRatio++;
            }
        } );
        console.log(posRatio/arr.length);
        console.log(negRatio/arr.length);
        console.log(zeroRatio/arr.length);        
    }
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
