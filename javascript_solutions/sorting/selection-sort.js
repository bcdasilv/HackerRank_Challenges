
//Selection Sort a 1-D array of integers in place
function selectionSort(numbers) {
    if (!numbers || numbers.length == 0) return numbers;

    for (let index = 0; index < numbers.length; index++) {
        const minIndex = findMinIndex(numbers, index);
        if (minIndex > index) {
            swap(numbers, index, minIndex);
        } //else, minIndex is the same as index
    }
    return numbers;
}

function findMinIndex(numbers, startIndex) {
    if (!numbers || numbers.length == 0 || startIndex >= numbers.length) return -1;

    let minIndex = startIndex; 
    let min = numbers[startIndex];
    for (let i = startIndex; i < numbers.length; i++) {
        if (numbers[i] < min) {
            minIndex = i;
            min = numbers[i]
        }
    }

    return minIndex;
}

function swap(numbers, index1, index2) {
    const temp = numbers[index1];
    numbers[index1] = numbers[index2];
    numbers[index2] = temp;
}

const arr = [64, 25, 12, 22, 11];
//const arr = [64, -25, 12, -22, 11];
// const arr = [0];
// const arr = [0, 0, 0, 0];
// const arr = [0, 1, 0, 0];
// const arr = [];
console.log(selectionSort(arr));