//Did they remove replaceAll from the env?
//It's raising a runtime error as if replaceAll was not a function
//https://www.hackerrank.com/challenges/one-week-preparation-kit-caesar-cipher-1/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-three
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
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

function caesarCipher(s, k) {
    const alphabetUpperArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const alphabetLowerArray = "abcdefghijklmnopqrstuvwxyz".split("");
    
    let codeStr = s;
    alphabetUpperArray.forEach( (character, index) => {
        let indexCoded = 0;
        if ( (index + k) < s.length)
            indexCoded = index + k;
        else
            indexCoded = s.length - (index + k);
        codeStr = s.replaceAll(character, alphabetUpperArray[indexCoded]);
    });
    
    alphabetLowerArray.forEach( (character, index) => {
        let indexCoded = 0;
        if ( (index + k) < s.length)
            indexCoded = index + k;
        else
            indexCoded = s.length - (index + k);
        codeStr = s.replaceAll(character, alphabetLowerArray[indexCoded]);
    });
    return codeStr;
    
    // let codedArray = new Array(s.length);
    // for (let index = 0; index < s.length; index++){
    //     const character = s.charAt(index)
    //     if (alphabetUpperArray.includes(character)) {
    //         const indexOf = alphabetUpperArray.indexOf(character);
    //         if (indexOf + k < s.length) {
    //             codedArray[index] = alphabetUpperArray[indexOf + k];
    //         } else {
    //             codedArray[index] = alphabetUpperArray[s.length - (indexOf + k)];
    //         }         
    //     } else if (alphabetLowerArray.includes(character)) {
    //         const indexOf = alphabetLowerArray.indexOf(character);
    //         if (indexOf + k < s.length) {
    //             codedArray[index] = alphabetLowerArray[indexOf + k];
    //         } else {
    //             codedArray[index] = alphabetLowerArray[s.length - (indexOf + k)];
    //         }
    //     } else {
    //         codedArray[index] = character;
    //     }          
    // }
    
    //Using array map... Code a little cleaner
    // let codedArray = s.split("").map( (character) => {
    //     if (alphabetUpperArray.includes(character)) {
    //         const indexOf = alphabetUpperArray.indexOf(character);
    //         if ((indexOf + k) < s.length) {
    //             return alphabetUpperArray[indexOf + k];
    //         } else {
    //             return alphabetUpperArray[s.length - (indexOf + k)];
    //         }         
    //     } else if (alphabetLowerArray.includes(character)) {
    //         const indexOf = alphabetLowerArray.indexOf(character);
    //         if ((indexOf + k) < s.length) {
    //             return alphabetLowerArray[indexOf + k];
    //         } else {
    //             return alphabetLowerArray[s.length - (indexOf + k)];
    //         }
    //     } else {
    //       return character;
    //     }          
    // });
    
    // return codedArray.join("");    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const s = readLine();

    const k = parseInt(readLine().trim(), 10);

    const result = caesarCipher(s, k);

    ws.write(result + '\n');

    ws.end();
}
