//One of those simple test preps in HackerRank
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
 * Complete the 'fizzBuzz' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++){
        const modThree = i % 3;
        const modFive = i % 5;
        if (!modThree && !modFive){
            console.log("FizzBuzz");
        }
        else if (!modThree && modFive){
            console.log("Fizz");
        }
        else if (modThree && !modFive){
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    fizzBuzz(n);
}
