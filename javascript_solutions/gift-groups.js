//incomplete
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
 * Complete the 'countGroups' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING_ARRAY related as parameter.
 */

function countGroups(related) {
    // Row: sender/giver
    // Colummn: receiver
    
    let i = 0;
    let j = 1;
    // let groupCount = 1;
    let groupType = "";
    let seqOnes = 0;
    let soloGroups = 0;
    for (; i < related.length - 1 && j < related.length; i++) {
        // console.log(`Iteration: ${related[i].charAt(j)} groupType: ${groupType}`);
        if (groupType === "") { //first iteration
            if (related[i].charAt(j) === "0") {
                groupType = "solo";
                // groupCount++;
                soloGroups = 1;
            } else {
                groupType = "connected";
                seqOnes++;
            }
        }
        else if (related[i].charAt(j) === "0" && groupType === "solo") {
            // groupCount++;
            soloGroups++;
            if (j === related.length - 1) {
                // groupCount++;
                soloGroups++;              
            }  
        }
        else if (related[i].charAt(j) === "0" && groupType === "connected") {
            // groupCount++;
            groupType = "solo";
            if (j === related.length - 1)
                soloGroups++;              
        }
        else if (related[i].charAt(j) === "1" && groupType === "solo") {
            //groupCount++;
            groupType = "connected";
            seqOnes++;
            // soloGroups--;
        } 
        else if (related[i].charAt(j) === "1" && groupType === "connected") {
            //nothing, just increasing the connected group
        }                  
        j++;
    }
    // return groupCount;
    return (seqOnes + soloGroups);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const relatedCount = parseInt(readLine().trim(), 10);

    let related = [];

    for (let i = 0; i < relatedCount; i++) {
        const relatedItem = readLine();
        related.push(relatedItem);
    }

    const result = countGroups(related);

    ws.write(result + '\n');

    ws.end();
}
