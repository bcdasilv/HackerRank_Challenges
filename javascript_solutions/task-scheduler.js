//https://leetcode.com/problems/task-scheduler/
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
 var leastInterval = function(tasks, n) {
    
    if (tasks.length === 1 || n === 0) return tasks.length;
  
    
    const lettersMap = new Array(26).fill(0); //26 letters of the alphabet
    const indexMap = {
        'A': 0,
        'B': 1,
        'C': 2,
        'D': 3,
        'E': 4,
        'F': 5,
        'G': 6,
        'H': 7,
        'I': 8,
        'J': 9,
        'K': 10,
        'L': 11,
        'M': 12,
        'N': 13,        
        'O': 14,        
        'P': 15,        
        'Q': 16,        
        'R': 17,        
        'S': 18,
        'T': 19,        
        'U': 20,        
        'V': 21,        
        'W': 22,        
        'X': 23,        
        'Y': 24,        
        'Z': 25               
    };
    
    tasks.forEach( t => {
        const freq = lettersMap[indexMap[t]];
        if (freq) {
            lettersMap[indexMap[t]] = freq + 1;
        } else {
            lettersMap[indexMap[t]] = 1;
        }
    });
    
    lettersMap.sort( (a, b) => {
        if (a > b) {
            return 1;
        } else {
            return -1;
        }
    });
    
    // console.log("Letters map:");
    // console.log(lettersMap);
    
    let maxFreq = lettersMap[25];
    
    // console.log("maxFreq:" + maxFreq);
    
    let idleSlots = 0; //let's assume worst case is filling up with idleSlots in between a bunch of repeated tasks
    
    idleSlots = (maxFreq - 1) * n;  //-1 because we don't need to add idle tasks at the end
    
    //Now, let's work backwards by replacing idle slots with other letters
    
    for (let i = 24; i>= 0; i--) { // starts at 24 since the last one was already considered above
        idleSlots -= Math.min(lettersMap[i], maxFreq - 1);
        //subtracted based on how many spaces we can deduct based on a given letter (how many times the letter appears)
        // this number should not be higher than the # of times we added idle slots initially.
        //   this accounts for situations when more than one letter has the highest frequency
    }
    
    // In the end, the result is all tasks processed plus idle slots leftovers
    // or if there are not idle slots left over (0 or negative), than means 
    // we can process all tasks without adding idle slots;
    if (idleSlots > 0)
        return idleSlots + tasks.length;
    else
        return tasks.length;
    
};