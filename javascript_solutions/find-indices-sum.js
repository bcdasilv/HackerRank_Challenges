// Given an array of integers
// Method that takes two params: 
// first: array of integers
// second: (num) single int (posit or neg)
// Goal: find the indices of the two numbers in the array that sum together the second param

function findIndices(arr, num) {
    const result = [];
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
      map.set(arr[i], i);
    }
    
    for (entry of map) {
      const num_arr = entry[0];
      const index = entry[1];
      const compl = num - num_arr;
      if (map.get(compl)) {
        result[0] = index;
        result[1] = map.get(compl);
        return result;
      }
    }
    
  }
  
  let result = findIndices([-5, 10, 3, -20, 0, 4], -25);
  /**
   * -5: 0
   * 10: 1
   * 3: 2
   * -20: 3
   * 0: 4
   * 4: 5
   */
  
  console.log(result);
  result = findIndices([-5, 10, 3, -20, 0, 4], -20);
  console.log(result);
  