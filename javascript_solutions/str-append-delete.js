//https://www.hackerrank.com/challenges/append-and-delete/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign
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
 * Complete the 'appendAndDelete' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. STRING t
 *  3. INTEGER k
 */

function appendAndDelete(s, t, k) {
    // Write your code here
// hackerhappy
// hackerrank
// 9
// Yes

/**
 * if the first char doesn't match, we'd need to delete as many chars as the
 * length of s
 * 
 * for each index in s
 *   if char[index] does not match with the same char[index] in t
 *   then you need s.length - index delete operations to match the beginning
 *   also you need s.length - index operations to match the end
 *   if this number is greater than k return No
 *   else return yes
 */
    if (s.length === 0) {
        if (t.length > k) 
            return "No";
        else
            return "Yes";
    } else if (t.length === 0) {
        if (s.length > k) 
            return "No";
        else
            return "Yes";        
    }

    for (let index = 0; index < s.length; index++) {
        if (index === t.length) {
            if (s.length - index +1 > k)
                return "No";
            else   
                return "Yes";
        } else if (s.charAt(index) != t.charAt(index)) {
            if ( (s.length - index) + (t.length - index) > k)
                return "No";
            else   
                return "Yes";
        }
    }
    
    const diff = t.length - s.length;
    if (t.length > s.length && (diff > k || ( (k - diff) % 2 != 0))) {
            return "No";
    }
    return "Yes";
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const t = readLine();

    const k = parseInt(readLine().trim(), 10);

    const result = appendAndDelete(s, t, k);

    ws.write(result + '\n');

    ws.end();
}
