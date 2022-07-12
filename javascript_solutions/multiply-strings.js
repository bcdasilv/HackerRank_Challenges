//https://leetcode.com/problems/multiply-strings/submissions/
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var multiply = function(num1, num2) {
    
    /*
    Iterate num2 from end to beginning
    Take right most digit on num2, multiply by right most digit of num1 (add to the complment if exists)
    If result <= 9 add it to the result
    otherwise, take the second digit and add it to the result, take the first digit and save it in a var (complement)
    Repeat until num2 multiplied by all digits in num1
    Take the result and to an array.
    From second iteration on, add zero to the end (as many times as it is greater than 1)
    */
    
    let partialResult = "";
    let complement = 0;
    let result = BigInt(0);
    
    
    //First, assuming they're both same size, change it later
    for (let i = num1.length - 1; i >= 0; i--) {
        num1Dig = num1.charAt(i);
        for (let j = num2.length - 1; j >= 0; j--) {
            num2Dig = num2.charAt(j);
            let mult = parseInt(num1Dig, 10) * parseInt(num2Dig, 10);
            mult += complement;
            if (mult <= 9) {
                partialResult = mult.toString() + partialResult;
                complement = 0;
            } else if (j > 0){
                complement = Math.floor(mult / 10); //taking the first dig, the complement to be use in the next iteration
                const multSecDig = mult % 10;
                partialResult = multSecDig.toString() + partialResult;
            } else {
                partialResult = mult.toString() + partialResult;
                complement = 0;
            }
        }
        console.log("partial: " + partialResult);
        if (i === num1.length - 1) {
            result = BigInt(partialResult);
        }
        else {
            const toAdd = partialResult + zeros( (num1.length - i - 1));
            console.log("toAdd: " + toAdd);
            result = result + BigInt(toAdd);
        }
        console.log("result: "+ result)
        partialResult = "";
    }
    return result.toString();
};

var zeros = function (nZeros) {
    let z = "";
    for (let i = 1; i <= nZeros; i++) {
        z += "0";       
    }
    return z;
}