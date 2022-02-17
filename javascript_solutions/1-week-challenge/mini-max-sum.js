// https://www.hackerrank.com/challenges/one-week-preparation-kit-mini-max-sum/problem?h_l=interview&h_r=next-challenge&h_v=zen&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D%5B%5D=one-week-day-one
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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    const sortedArr = arr.sort();
    const allButLast = sortedArr.slice(0, -1);
    const allButFirst = sortedArr.slice(1);
    const minSum4 = sumElements(allButLast);
    const maxSum4 = sumElements(allButFirst);
    console.log(minSum4 + " " + maxSum4);
}

function sumElements(arr) {
    return arr.reduce(
        (previousValue, currentValue) => previousValue + currentValue, 0);    
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
