//https://www.hackerrank.com/challenges/one-week-preparation-kit-balanced-brackets/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-five
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

const OPEN_PARENTHESIS = "(";
const CLOSE_PARENTHESIS = ")";
const OPEN_CURLY = "{";
const CLOSE_CURLY = "}";
const OPEN_BRACKETS = "[";
const CLOSE_BRACKETS = "]";
    
function isOpen(char) {
    if (char === OPEN_BRACKETS || char === OPEN_PARENTHESIS || char === OPEN_CURLY) {
        return true;
    }
    return false;
}

function match(left, right) {
    if (left === OPEN_BRACKETS && right === CLOSE_BRACKETS) return true;
    if (left === OPEN_CURLY && right === CLOSE_CURLY) return true;
    if (left === OPEN_PARENTHESIS && right === CLOSE_PARENTHESIS) return true;
    
    return false;
}
/*
 * Complete the 'isBalanced' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function isBalanced(s) {
    const leftStack = [];
    
    for (let index = 0; index < s.length; index++) {
        const char = s.charAt(index);
        if (isOpen(char)) {
            leftStack.push(char);
        } else {
            if (leftStack.length > 0 && match(leftStack[leftStack.length - 1], char)) {
                leftStack.pop();
            } else {
                return "NO";
            }
        }
    }
    if (leftStack.length === 0) {
        return "YES";    
    }
    return "NO"
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const s = readLine();

        const result = isBalanced(s);

        ws.write(result + '\n');
    }

    ws.end();
}
