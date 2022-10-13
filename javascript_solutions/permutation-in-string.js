//https://leetcode.com/problems/permutation-in-string/description/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length)
        return false;
    
    const s1Map = buildMap(s1);
    // print(s1Map);
    for (let i = 0; i <= s2.length - s1.length; i++) {
        // console.log(s2.slice(i, i + s1.length));
        const s2Map = buildMap(s2.slice(i, i + s1.length))
        // print(s2Map);
        if (matches(s1Map, s2Map))
            return true;
    }
    return false;
};

var buildMap = function (str) {
    const map = new Map();
    for (let index = 0; index < str.length; index++) {
        const freq = map.get(str.charAt(index));
        if (freq)
            map.set(str.charAt(index), freq + 1);
        else
            map.set(str.charAt(index), 1);
    }
    return map;
}

var matches = function (s1Map, s2Map) {
    for (entry of s1Map) {
        const letter = entry[0];
        const freq = entry[1];
        if (s2Map.get(letter) != freq)
            return false;
    }
    return true;
}

// var print = function (map) {
//     for (entry of map)
//         console.log(`${entry[0]}: ${entry[1]}`);
// }