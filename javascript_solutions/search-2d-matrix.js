//https://leetcode.com/problems/search-a-2d-matrix
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
    /*
    Iterate over rows (0 to matrix.length) (to optmize, bin search on which row to take)
    For each row, check if target is equals or less than the last element
    If yes, iterate backwards on that row (could do binary search here to optmize)
    If not, look for the next row.
    */

    let lowRow = 0;
    let upperRow = matrix.length - 1
    
    while (lowRow <= upperRow) {
        const midRow = lowRow + Math.floor((upperRow - lowRow) / 2);
        if (searchRow(midRow, matrix, target))
            return true;
        if (target > matrix[midRow][matrix[midRow].length-1])
            lowRow = midRow + 1;
        else
            upperRow = midRow - 1;
    }
    return false;
};

var searchRow = (row, matrix, target) => {
    
    //iterate over the row with bin search
    
    let low = 0;
    let high = matrix[row].length - 1;
    
    while(low <= high) {
        const mid = low + Math.floor((high - low) /2); 
        if (matrix[row][mid] === target)
            return true;
        if (matrix[row][mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return false;
}