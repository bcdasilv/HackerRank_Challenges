//There's a bug on the quicksort but I drafted out a better solution

//Sort grades from A+ to F, array of strings may contain invalid grades
//Eliminate invalid grades
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
 * Complete the 'sort_grades' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY unsorted_grades as parameter.
 */

function sort_grades(unsorted_grades) {
/**
 * FIlter the invalid values and output the grades in order from 
 * highest to lowest
 * 
 * Input is a string array
 * Output should be an array of string 
 * 
 * Each string consists of an upper-case letter 
 * and an optional + or -
 * 
 * 
 */ 
    cleanUpGrades(unsorted_grades);
    
    //console.log(unsorted_grades);
        
    quickSort(unsorted_grades, 0, unsorted_grades.length - 1);
    
    return unsorted_grades;

    /**
     * TODO: Re-implement the solution following this logic:
     * Iterate over the array for:
     *  1. Cleaning up grades; and
     *  2. Building a hashmap/dict of grades and their frequencies
     *   (this iteration is O(n))
     * Then, iterate over each key of the map/dict to build the sorted array.
     * O(n)
     */
    
}

function quickSort(unsorted_grades, left, right) {
    //Find the partition index
    const index = partition(unsorted_grades, left, right);
    
    if (left < index - 1) { //Take the first half
        quickSort(unsorted_grades, left, index - 1);
    }
    if (index < right) { //Take the second half
        quickSort(unsorted_grades, index, right);
    }
}

function partition(unsorted_grades, left, right) {
    //Pick an element (pivot)
    //Assuming the middle element is a good choice for this kind of dataset
    const pivotMidElement = unsorted_grades[left + (right - left) / 2];
      
    //Now, work on sorting
    while(left <= right) {
        
        //Increment the left index until we find an element to be swapped
        while(isGradeSmaller(unsorted_grades[left], pivotMidElement)) {
        //while(unsorted_grades[left] < pivotMidElement) { //Doesn't work well with strings and symbols
            left++; 
        }
        
        //Decrement the right index until we find an element to be swapped
        while(isGradeSmaller(pivotMidElement, unsorted_grades[right])) {
        //while(unsorted_grades[right] > pivotMidElement) { //Doesn't work well with strings and symbols
            right--;    
        }
        
        // If this is true, then we found a swap case
        if (left <= right) {
            swap(unsorted_grades, left, right);
            left++;
            right--;
        }         
    }
    return left;
}

function swap(unsorted_grades, left, right) {
    const auxGrade = unsorted_grades[left];
    unsorted_grades[left] = unsorted_grades[right];
    unsorted_grades[right] = auxGrade;
}

function cleanUpGrades(grades) {
    grades.forEach( (grade, index) => {
        if (isInvalid(grade))
            grades.splice(index, 1);
    });
}

function isGradeSmaller(gradeA, gradeB) {
    const validGrades = ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "D-", "F"];    
    return validGrades.indexOf(gradeA) > validGrades.indexOf(gradeB);
}

function isInvalid(grade) {
    //I'll work on Regex if time allows
    //I'll make it work now and make it better if time permits
    const validGrades = ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "D-", "F"];       
    return !validGrades.includes(grade);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const unsorted_gradesCount = parseInt(readLine().trim(), 10);

    let unsorted_grades = [];

    for (let i = 0; i < unsorted_gradesCount; i++) {
        const unsorted_gradesItem = readLine();
        unsorted_grades.push(unsorted_gradesItem);
    }

    const result = sort_grades(unsorted_grades);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
