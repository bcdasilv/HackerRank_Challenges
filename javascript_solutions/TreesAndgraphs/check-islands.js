/**
 * 

This problem takes place in the setting of a ''binary matrix'': a 2-dimensional array of 1's and 0's (equivalently: black and white, on and off, etc.). Like so:
0 1 1 0 1 0 1
0 1 0 0 1 0 1
0 1 0 0 1 1 1
1 0 0 0 0 0 0
output: 3
island 1: (3,0)
island 2: (0, 1) (0, 2) (1, 1) (2, 1)
island 3: ...

 */

let inIsland = false;
let count = 0;
let visited;

//Return an integer as the number of islands
function countIslands(arr) { //2-d array of 0s and 1s
  visited = preFill(arr.length)
  // console.log(visited);
  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr.length; col++) {
      if (!visited[row][col]) {
        dfs(arr, row, col);
        //if needed to return an array of islands
        //I would save the island from this dfs call
        //in an array of islands here
      }
    }
  }
  return count;
  //or return the array of islands or before the return print out 
  //the arrray of islands.
}

function dfs(arr, row, col) {
  
  if (row < 0 || col >= arr.length || row >= arr.length || col < 0) return;

  if (visited[row][col]) return ;

  if (arr[row][col] == 1) {
    if (!inIsland) {
      count++;
      inIsland = true;
    }
    visited[row][col] = 1;
    dfs(arr, row-1, col);
    dfs(arr, row, col-1);
    dfs(arr, row+1, col);
    dfs(arr, row, col+1);
    inIsland = false;
  } else {
    visited[row][col] = 1;
    // if (col < arr.length - 1)
    //   dfs(arr, row, col+1);
    // else if (col == arr.length - 1)
    //   dfs(arr, row+1, 0);
  }
}

function preFill(length) {
  const visited = [];
  for (let row = 0; row < length; row++) {
    const oneD = [];
    for (let col = 0; col < length; col++) {
      oneD.push(0);
    }
    visited.push(oneD);
  }
  return visited;
}

// const arr = [[1,1,1],[1,1,1],[1,1,1]];
// const arr = [[0,0,0],[0,0,0],[0,0,0]];
// const arr = [[0,0,0],[0,1,0],[0,0,0]];
// const arr = [[0,1,0],[0,0,0],[0,0,0]];
// const arr = [[0,0,0],[0,0,0],[0,1,0]];
// const arr = [[0,1,0],[0,1,0],[0,0,0]];
// const arr = [[0,1,0],[0,1,0],[0,1,1]];

// const arr = [[0,1,0],[0,1,0],[0,0,1]];
// const arr = [[1,0,0],[0,1,0],[0,0,1]];

/*
0 1 1 0 1 0 1
0 1 0 0 1 0 1
0 1 0 0 1 1 1
1 0 0 0 0 0 0
*/
const arr = [
[0,1,1,0,1,0,1],
[0,1,0,0,1,0,1],
[0,1,0,0,1,1,1],
[1,0,0,0,0,0,0]
];
console.log(countIslands(arr));