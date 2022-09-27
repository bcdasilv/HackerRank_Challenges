//https://leetcode.com/problems/minimum-window-substring/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function(s, t) {
    /*
        Not the optimal solution but it solves the problem.

        1) build a map of char frequency for t 
            key is the char and value is # of times it appears on t
            O(size of t)
            
        2) Iterate over s and t (nested loops)
        Start with a char in s and pick a substr which is the length of t
        if that substr can be a possible solution save it and start the outter
        loop again with the next char (sliding to the right)
        If that substr cannot be a possible solution, increase the string by picking
        the next character (increasing the window/substr until it picks a solution or hits the end)
    */
    
    const t_map = new Map();
    for (let i = 0; i < t.length; i++) {
        const t_freq = t_map.get(t.charAt(i));
        if (t_freq) {
            t_map.set(t.charAt(i), t_freq+1);
        } else {
            t_map.set(t.charAt(i), 1);
        }       
    } 
    
    let result = "";
    for (let i = 0; i < s.length; i++) {
        for (let j = i + t.length; j <= s.length; j++) { //note the <= since the slice doesn't include the upper bound index
            const substr = s.slice(i,j);
            // console.log(substr)
            if (contains(substr, t_map)) {
                j = s.length + 1;//start a new slide window
                if (result === "" || result.length > substr.length) {
                     result = substr;
                    // console.log(`result: ${result}`);
                } 
            }            
        }
    }
    return result;
};

// var contains = function(substr, t) {
//     for (let i = 0; i < t.length; i++) {
//         const t_char = t.charAt(i);
//         if (!substr.includes(t_char))
//             return false;
//     }
//     return true;
// }

var contains = function(substr, t_map) {    
    const substr_map = new Map();
    for (let i = 0; i < substr.length; i++) {
        const substr_freq = substr_map.get(substr.charAt(i));
        if (substr_freq) {
            substr_map.set(substr.charAt(i), substr_freq+1);
        } else {
            substr_map.set(substr.charAt(i), 1);
        }    
    }
        
    for (t_entry of t_map) {
        const t_char = t_entry[0];
        const t_freq = t_entry[1];
        if (!substr_map.get(t_char) || substr_map.get(t_char) < t_freq)
            return false;
    } 
    return true;
}