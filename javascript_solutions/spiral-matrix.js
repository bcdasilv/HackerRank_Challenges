//https://leetcode.com/problems/spiral-matrix/
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
    
    let result = [];
    
    /* BASE CASES */
    if (matrix.length === 0) return result;
    
    if (matrix.length === 1 && matrix[0].length === 1) {
        return matrix[0];    
    }
    else if (matrix.length === 1) { // single row, just move right
        result.push(matrix[0][0]);
        moveRight(0, 0, matrix[0].length - 1, matrix, result);
        return result;
    } else if (matrix[0].length === 1) { // single col, just move down
        result.push(matrix[0][0]);
        moveDown(0, matrix.length - 1, 0, matrix, result);
        return result;
    }
    /* END - BASE CASES */
    
    let col_start = 0;
    let row_start = 0;
    let col_end = matrix[0].length - 1;
    let row_end = matrix.length - 1;
    
    let iterationCount = 0;
    
    result.push(matrix[0][0]);
    
    while(result.length < (matrix.length * matrix[0].length)) {
        
        if (iterationCount > 3)
            col_end--;
        col_end = moveRight(row_start, col_start, col_end, matrix, result);
        iterationCount++;
        
        if (result.length < (matrix.length * matrix[0].length)) {
            if (iterationCount > 3)
                row_end--;
            row_end = moveDown(row_start, row_end, col_end, matrix, result);
            iterationCount++;
        }
        if (result.length < (matrix.length * matrix[0].length)) {
            if (iterationCount > 3)
                col_start++;
            col_start = moveLeft(row_end, col_end, col_start, matrix, result);
            iterationCount++
        }
        if (result.length < (matrix.length * matrix[0].length)) {
            row_start++;
            row_start = moveUp(row_end, row_start, col_start, matrix, result); 
            iterationCount++;
        }
       
        
    }

    return result;
};

/*
    let col_start = 0; 
    let row_start = 0;
    let col_end = 2;
    let row_end = 2;
    Move right
    
    col_start = 0; 
    row_start = 0;
    col_end = 2;
    row_end = 2;    
    Move down
    
    col_start = 0; 
    row_start = 0;
    col_end = 2;
    row_end = 2;     
    Move left
    
    col_start = 0; 
    row_start = 0;
    col_end = 2;
    row_end = 2;  
     row_start++
    Move up
    
    col_start = 0; 
    row_start = 1;
    col_end = 2;
    row_end = 2;      
*/

var moveRight = function(row, col_start, col_end, matrix, result) {
    if (col_start >= 0 && col_end <= matrix[0].length) { //yes, can move to the right
        let j;
        for (j = col_start + 1; j <= col_end; j++) {  // start with +1 to skip the corner already covered in the moveUp
            result.push(matrix[row][j]);
        }    
        return j-1; //to compesate the extra increment that ends the for loop    
    }
    return col_start; //no, can't move to the right
}

var moveLeft = function(row, col_start, col_end, matrix, result) {
    if (col_start <= matrix[0].length && col_end >= 0) { //yes, can move to the left    
        let j;
        for (j = col_start - 1; j >= col_end; j--) { //start with -1 to skip the corner already covered in the moveDown
            result.push(matrix[row][j]);
        }    
        return j+1; //to compesate the extra decrement that ends the for loop
    }
    return col_start; //no, can't move to the left
}

var moveDown = function(row_start, row_end, col, matrix, result) {
    if (row_start >= 0 && row_end <= matrix.length) { //yes, can move down
        let i;
        for (i = row_start + 1; i <= row_end; i++) { // start with +1 to skip the corner already covered in the moveRight
            result.push(matrix[i][col]);
        }    
        return i-1; //to compesate the extra increment that ends the for loop         
    }
    return row_start; // no, can't move down
}

var moveUp = function(row_start, row_end, col, matrix, result) {
    if (row_start <= matrix.length && row_end >= 0) { //yes, can move up
        let i;
        for (i = row_start - 1; i >= row_end; i--) { //start with -1 to skip the corner already covered in the moveLeft
            result.push(matrix[i][col]);
        }    
        return i+1; //to compesate the extra decrement that ends the for loop         
    }
    return row_start; // no, can't move up
}