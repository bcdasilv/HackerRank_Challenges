//https://leetcode.com/problems/sort-colors/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//Bubble sort: space complexity O(n) and runtime complexity O(n^2)
// var sortColors = function(nums) {
//     let sorted = false;
//     let upperEnd = nums.length - 1;
//     while (!sorted) {
//         sorted = true;
//         for (let index = 0; index <= upperEnd; index++) {
//             if (nums[index] > nums[index+1]) { //need to swap
//                 swap(nums, index, index+1);
//                 sorted = false;
//             } 
//         }
//         upperEnd--;
//     }
// };

//Mapping the color frequency
//Reassigning values in place based on each color/int frequency
//Time complexity is linear based on the size of the array
//Extra space complexity is constant in addition to the array
var sortColors = function(nums) {
    
    const hashMap = mapColors(nums); //One pass: O(n)
    
    //+ one more pass: O(n)
    // space complexity is constant always three keys mapped to an int (each).
    //Ex: {0: 2, 1: 2, 2: 2}
    let startIndex = 0;
    if (hashMap.get(0)){
        orderColor(0, nums, startIndex, hashMap);
        startIndex = hashMap.get(0);
    } 
    
    if (hashMap.get(1)) {
        orderColor(1, nums, startIndex, hashMap);
        startIndex += hashMap.get(1);
    }
    
    if (hashMap.get(2)) {
        orderColor(2, nums, startIndex, hashMap);
    }
    
};

var orderColor = (color, nums, startIndex, hashMap) => {
    for (let index = startIndex; index < startIndex + hashMap.get(color); index++) {
        nums[index] = color;
    }     
}

var mapColors = (nums) => {
    const hashMap = new Map();
    for (let index = 0; index < nums.length; index++) {
        if (hashMap.get(nums[index])) {
            hashMap.set(nums[index], hashMap.get(nums[index]) + 1);
        } else {
            hashMap.set(nums[index], 1);
        }
    }
    return hashMap;
};
// var swap = (nums, left, right) => {
//     const temp = nums[left];
//     nums[left] = nums[right];
//     nums[right] = temp;
// };

/*
[2,0,2,1,1,0] => [0,0,1,1,2,2]

[0, 0, 1, 1, 2, 2]

0: 2
1: 2
2: 2

0: 1, 5
1: 3, 4
2: 0, 2

*/