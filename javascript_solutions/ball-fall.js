//https://leetcode.com/problems/where-will-the-ball-fall/
/**
 * @param {number[][]} grid
 * @return {number[]}
 */
 var findBall = function(grid) {
    var result = [];
    
    for (let i = 0; i < grid[0].length; i++) {
        result.push(checkPath(grid, i));
    }
    
    return result;
};

var checkPath = function(grid, startCol) {
    
    if (grid[0].length === 1) return -1; //one col, needs at least 2
    
    /*
    Scan the grid starting at startCol and row = 0.
    IF cell = 1, same row next col must be 1, then go to col+1 and row+1
    //reverse logic for -1
    else if next col is -1, found a V // return -1
    else if next col is out of bouds, found a wall //return -1
    repeat until row = grid.length - 1, return col.
    */
    
    let row = 0;
    let col = startCol;
    while(row < grid.length) {
        if (grid[row][col] === 1) {
            if (col + 1 === grid[0].length) { //hit the wall on the right
                return -1;
            } else if (grid[row][col + 1] === -1) { //found a V 
                return -1;
            } else if (grid[row][col + 1] === 1) { //good to go
                if (row === grid.length - 1) // already in bottom
                    return col+1;
                row++;
                col++;
            }
        } else if (grid[row][col] === -1) { 
            if (col - 1 === -1) { //hit the wall on the left
                return -1;
            } else if (grid[row][col - 1] === 1) { //found a V
                return -1;
            } else if (grid[row][col - 1] === -1) { //good to go
                if (row === grid.length - 1) {//already in bottom
                    return col - 1;
                }
                row++;
                col--;
            }
        }
    }
    return col;
}