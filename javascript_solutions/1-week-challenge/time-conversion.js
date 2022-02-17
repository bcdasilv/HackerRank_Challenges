// https://www.hackerrank.com/challenges/one-week-preparation-kit-time-conversion/problem?h_l=interview&h_r%5B%5D=next-challenge&h_r%5B%5D=next-challenge&h_v%5B%5D=zen&h_v%5B%5D=zen&isFullScreen=true&playlist_slugs%5B%5D%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D%5B%5D%5B%5D=one-week-day-one
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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    const arr = s.split(":");
    const hour = arr[0];
    const minute = arr[1];
    const second = arr[2].charAt(0) + arr[2].charAt(1);
    const am_pm = arr[2].charAt(2) + arr[2].charAt(3);
    let converted = "";
    if (am_pm === "AM") {
        if (hour === "12") {
            converted = "00"+":"+minute+":"+second;        }
        else {
            converted = hour+":"+minute+":"+second;;
        }
    } else if (am_pm === "PM") {
        if (hour === "12") {
            converted = hour+":"+minute+":"+second;
        } else {
            const newHour = parseInt(hour) + 12;
            converted = newHour+":"+minute+":"+second;
        }
    }
    return converted;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
