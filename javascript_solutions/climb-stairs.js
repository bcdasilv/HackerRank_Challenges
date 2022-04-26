//https://leetcode.com/problems/climbing-stairs/submissions/
const memo = new Map();

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 3) return n;  
    
    const steps = memo.get(n);
    if (steps) return steps;
    
    const result1 = climbStairs(n-1);
    if (!memo.get(n-1)) memo.set(n-1, result1); 
    
    return  result1 + climbStairs(n-2);

};

/*
n = 1 => 1
n = 2 => 2      climb(1) + climb(1)
n = 3 => 3 (1 + 2, 2 + 1, 1+1+1)    climb(1)+climb(2)
n = 4 =>  (1)
            (1)
                (1)
                    (1).
                (2).
            (2)
                (1).
          (2)
            (1)
                (1).
            (2).

climb(5)
    result1 = 1 + climb(4); => 1 + 5
    result2 = 2 + climb(3); => 2 + 3
    
    
climb(4)
    result1 = climb(3) => 3
    result2 = climb(2) => 2
    

climb(3) 
    result1 = 1 + climb (2) => 3
    result2 = 2 + climb (1) => 3
    
    climb(2) = 2
    climb(1) = 1
    climb(0) = 0
*/