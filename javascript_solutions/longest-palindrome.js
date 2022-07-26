// https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/submissions/
/**
 * @param {string[]} words
 * @return {number}
 */
 var longestPalindrome = function(words) {
    /*
    Build a map of occurrences for same letter words
    And a map of occurrences for diff letter words
    
    Iterate over diff letter word map
    Each key, the value is the # of occurrences of tha key (word)
    If the reverse of that key/word is in the map, take the value.
    The min between the two values * 4 is the longest palindrome in this iteration
    Iterate until covering the whole map
    
    Second map:
    For each key (same letter word) take the value and multiply by 2 if it's an even value.
    If it's an odd value, multiply by 2 and subtract two.
    Iterate.
    In the end, if there were at least one key with an odd value, than add 2 to the final count.
    
    Return count (longest).
    */
    
    const sameLetterMap = new Map();
    const diffLetterMap = new Map();
    let count = 0;
    
    for (word of words) { // O(n)
        if (word[0] === word[1]) {
            const freq = sameLetterMap.get(word);
            if (freq) {
                sameLetterMap.set(word, freq + 1);
            } else {
                sameLetterMap.set(word, 1);
            }
        } else {
            const freq = diffLetterMap.get(word);
            if (freq) {
                diffLetterMap.set(word, freq + 1);
            } else {
                diffLetterMap.set(word, 1);
            }            
        }
    }
    
    for (pair of diffLetterMap) { // O(n)
        const word = pair[0];
        const wordFreq = pair[1];
        const reverse = word[1]+word[0];
        const reverseFreq = diffLetterMap.get(reverse);
        if (reverseFreq) {
            count += (Math.min(wordFreq, reverseFreq) * 4); //we're taking the pairs, so if the numbers don't match, we'll taken the smallest.
        }
        diffLetterMap.set(reverse, 0); //setting the reverse word as taken (already used it)
    }
    
    let leftOvers = false;
    for (pair of sameLetterMap) {
        const word = pair[0];
        const wordFreq = pair[1];
        
        
        count += wordFreq * 2;
        
        if (wordFreq % 2 != 0) {
            count -= 2;
            leftOvers = true;
        }
    }
    if (leftOvers)
        count += 2;
    
    return count;
};

// var injectDoubleLetter = (pal, word) => {
    
//     const firstHalf = pal.slice(0, pal.length/2);
//     const secHalf = pal.slice(pal.length/2, pal.length);
//     pal = firstHalf + word + secHalf;
//     return pal;
// }

// var canInjectDoubleLetter = (pal) => { //can only inject if word count is even
//     if (pal.length <= 2) return false; //can't be on a double letter pal
    
//     const wordCount = pal.length / 2;
//     return (wordCount % 2 === 0); //if it's odd, cannot inject a double/same letter.
// }

// var isSameLetter = (word) => {
//     if (word.length != 2) return false;
    
//     return (word.charAt(0) === word.charAt(1));
        
// }

// var isPalindrome = (word) => {
//     let j = word.length - 1;
//     for (let i = 0; i < j; i++) {
//         if (word.charAt(i) != word.charAt(j))
//             return false;
//         j--;
//     }
//     return true;
// }

// var alreadyContains = (arr, elem) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === elem) return i;
//     }
//     return -1;
// }