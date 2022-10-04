/**
 * 

const _ = require('lodash');

function sayHello() {
  console.log('Hello, World');
}

_.times(5, sayHello);

This problem takes place in the setting of a ''binary matrix'': a 2-dimensional array of 1's and 0's (equivalently: black and white, on and off, etc.). Like so:
0 1 1 0 1 0 1
0 1 0 0 1 0 1
0 1 0 0 1 1 1
1 0 0 0 0 0 0
output: 3
island 1: (3,0)
island 2: (0, 1) (0, 2) (1, 1) (2, 1)
island 3: ...

1 1  
1 1  
 */


//Return an integer as the number of islands
function countIslands(arr) { //2-d array of 0s and 1s
  let count = 0;
  let inIsland = false;
  // let direction = "up";
  checkIsland(arr, 0, 0, count);

}

function dfs(arr, row, col, count) {
  //if visited row and col return
  
  if (row < 0 || col > arr.length - 1 || row > arr.length - 1 || col < 0) return;

  if (arr[row, col] == 1){
    dfs(arr, row-1, col)
    dfs(arr, row, col-1)
    dfs(arr, row+ 1, col)
    dfs(arr, row, col+1)
  }
}

function checkIsland(arr, row, col, count) {
  if (arr[row, col] === 1 && !inIsland) { //island
    inInsland = true;
    count++;
    if (row > 0 && arr[row-1, col] === 1) {
      
    }
    if (col < arr.length - 1 && arr[row, col + 1]) {

    }
    if (row < arr.length - 1 && arr[row+1, col]) {

    } 
    if (col > 0 && arr[row, col - 1]) {

    }
   
  } else if (arr[row, col] === 1 && inIsland) {

  }
  else { //water

  }
}

