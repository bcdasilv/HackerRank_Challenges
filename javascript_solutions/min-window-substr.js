//https://leetcode.com/problems/minimum-window-substring/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function(s, t) {
    
    if (t.length > s.length) return "";

    if (t.length === s.length && s === t) return s;

    const t_map = buildMap(t);
    
    let i = 0;
    let j = i + t.length; //start window with size of t
    let result = "";
    const s_map = buildMap(s.slice(i, t.length));

    while (j <= s.length && i < j) {
        const substr = s.slice(i, j);
        if (contains(s_map, t_map)) {
            if (result === "" || substr.length < result.length) {
                result = substr;
            }
            //left pointer moves forward
            decreasingMap(s_map, s.charAt(i)); // update the s_map
            i++; //move pointer
        } else {
            //right pointer moves forward
            if (j < s.length) {
                increasingMap(s_map, s.charAt(j)); // minus 1 because we're using j in the slice function that doesn't include j
            }
            j++;
        }
    }
   return result;
};

var buildMap = function (str) {
    const map = new Map();
    for (let i = 0; i < str.length; i++) {
        const freq = map.get(str.charAt(i));
        if (freq) {
            map.set(str.charAt(i), freq+1);
        } else {
            map.set(str.charAt(i), 1);
        }       
    } 
    return map;
}

var increasingMap = function(s_map, char) {   
    let freq = 0;
    if (s_map.has(char)) {
        freq = s_map.get(char);
    }
    s_map.set(char, freq + 1);
}

var decreasingMap = function(s_map, char) {   
    if (s_map.has(char)) {
        const freq = s_map.get(char);
        if (freq === 1)
            s_map.delete(char);
        else 
            s_map.set(char, freq - 1);
    }
}

var contains = function(s_map, t_map) {   
    for (t_entry of t_map) {
        const t_char = t_entry[0];
        const t_freq = t_entry[1];
        if (!s_map.get(t_char) || s_map.get(t_char) < t_freq)
            return false;
    }
    
    return true;
}