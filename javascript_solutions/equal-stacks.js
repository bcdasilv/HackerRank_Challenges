//https://www.hackerrank.com/challenges/equal-stacks/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=7-day-campaign
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
 * Complete the 'equalStacks' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY h1
 *  2. INTEGER_ARRAY h2
 *  3. INTEGER_ARRAY h3
 */

function equalStacks(h1, h2, h3) {
    /**
     * sum the heights of each stack, O(n)
     * Take the diffence between heights of each stack. 
     * Pop the top element from the highest stack (stack_1). 
     * while the height of stack_2 is or the height of stack_3 > height of stack_1, pop stack_2 and/or stack_3
     * After the while, if the height of stack_2 or stack_3 is smaller than the height of stack_1
     * the: go back, pop stack_1 again and repeat.
     * 
     * If popped any of the stacks entirely, then return -1 (or 0?)
     * Otherwise, end of the while should point to the final even height, return
     */
    let sumH1 = sumHeights(h1);
    let sumH2 = sumHeights(h2);
    let sumH3 = sumHeights(h3);
    
    // let diffH1H2 = 0;
    // let diffH2H3 = 0;
    
    // Let's assume h1 points to the tallest
    // h2 points to the second tallest
    // h3 points to the shortest
    
    if (sumH1 >= sumH2 && sumH2 >= sumH3) {
      //
    } else if (sumH3 >= sumH2 && sumH2 >= sumH1) {
        const temp = h1;
        h1 = h3;
        h3 = temp;
        const tempSum = sumH1
        sumH1 = sumH3;
        sumH3 = tempSum;     
    } else if (sumH2 >= sumH1 && sumH1 >= sumH3) {
        const temp = h1;
        h1 = h2;
        h2 = temp;
        const tempSum = sumH1
        sumH1 = sumH2;
        sumH2 = tempSum;                
    } else if (sumH2 >= sumH3 && sumH3 >= sumH1) {
        const temp = h1;
        h1 = h3;
        h3 = h2;
        h2 = temp;
        const tempSum = sumH1
        sumH1 = sumH3;
        sumH3 = sumH2;            
        sumH2 = tempSum;       
    } else if (sumH1 >= sumH3 && sumH3 >= sumH2) {
        const temp = h3;
        h3 = h2;
        h2 = temp;
        const tempSum = sumH3;
        sumH3 = sumH2;
        sumH2 = tempSum;                
    } 
        
    let result = 0;
    while (h1.length > 0 && h2.length > 0 && h3.length > 0 && result === 0) {       
        if (sumH1 === sumH2 && sumH2 === sumH3) { //found the result
            result = sumH1;
        } else if ((sumH1 > sumH2 && sumH2 >= sumH3) || (sumH1 > sumH3 && sumH3 > sumH2)) {
            const temp = h1.shift();
            sumH1 -= temp;
        } else if ((sumH2 > sumH1 && sumH1 >= sumH3) || (sumH2 > sumH3 && sumH3 > sumH1) ) {
            const temp = h2.shift();
            sumH2 -= temp;   
        } else if ((sumH3 > sumH2 && sumH2 >= sumH1) || (sumH3 > sumH1 && sumH1 > sumH2) ) {
            const temp = h3.shift();
            sumH3 -= temp;
        } else if (sumH1 === sumH2 && sumH2 > sumH3) {
            let temp = h1.shift();
            sumH1 -= temp;
            temp = h2.shift();
            sumH2 -= temp;   
        } else if (sumH1 === sumH3 && sumH3 > sumH2) {
            let temp = h1.shift();
            sumH1 -= temp;
            temp = h3.shift();
            sumH3 -= temp;
        } else if (sumH2 === sumH3 && sumH3 > sumH1) {
            let temp = h2.shift();
            sumH2 -= temp;
            temp = h3.shift();
            sumH3 -= temp;
        }                      
    } 
    
    return result; //if -1 it means no possible solution.
    //otherwise, it holds the result/solution.
}

function sumHeights(stack) {
    let sum = 0;
    stack.forEach( elem => sum += elem);
    return sum;  
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n1 = parseInt(firstMultipleInput[0], 10);

    const n2 = parseInt(firstMultipleInput[1], 10);

    const n3 = parseInt(firstMultipleInput[2], 10);

    const h1 = readLine().replace(/\s+$/g, '').split(' ').map(h1Temp => parseInt(h1Temp, 10));

    const h2 = readLine().replace(/\s+$/g, '').split(' ').map(h2Temp => parseInt(h2Temp, 10));

    const h3 = readLine().replace(/\s+$/g, '').split(' ').map(h3Temp => parseInt(h3Temp, 10));

    const result = equalStacks(h1, h2, h3);

    ws.write(result + '\n');

    ws.end();
}
