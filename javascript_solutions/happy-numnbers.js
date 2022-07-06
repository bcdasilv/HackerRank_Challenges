//https://leetcode.com/problems/happy-number
/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
    const controlMap = new Map();
    let sum = sumOfSquares(n);
    while (sum != 0) {
        if (sum === 1) {
            return true;
        } else {
            if (controlMap.get(n))
                return false;
            controlMap.set(n, sum);
            n = sum;
            sum = sumOfSquares(sum);
        }        
    }
    return false;
};

function sumOfSquares(n) {
    if (n < 10) {
        return n**2;
    } else {
        let sum = 0;
        let digit = Math.floor(n/10);
        let remainder = n % 10;      
        if (digit < 10) {
            return (digit**2 + remainder**2);
        } else {
            return (sumOfSquares(digit) + remainder**2)
        }
    }
};