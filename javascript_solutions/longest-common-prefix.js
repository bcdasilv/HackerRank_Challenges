//https://leetcode.com/problems/longest-common-prefix/
/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    /*
    For each two strings in the array of strings, there should be a at least a matching prefix (at least one letter prefix in common)
    So, start with the first two words.
    Find the common prefix (if not return "");
    Take the common prefix, and apply to the next string (if not, return "");
    Repeat until you test all strings.
    */
    
    if (strs.length === 1) return strs[0];

    
    let prefix = findPrefix(strs[0], strs[1]);
    let previous = strs[1];
    for (let w = 2; w < strs.length && prefix != ""; w++) {
        const tempPrefix = findPrefix(previous, strs[w]);
        if (tempPrefix === "") return "";
        else if (tempPrefix.length < prefix.length ) {
            prefix = tempPrefix;
        }
    }
    return prefix;
    
};

var findPrefix = (str1, str2) => {
    let prefix = "";
    for (let i = 0; i < str1.length && i < str2.length; i++) {
        if (str1.charAt(i) === str2.charAt(i)) {
            prefix += str1.charAt(i);
        } else 
            return prefix;
    } 
    return prefix;
}