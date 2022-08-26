//https://leetcode.com/problems/search-in-rotated-sorted-array/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    /*
    Sorted array of nums, possibly rated at an index (pivot index)
    Distinct values
    
    You must write an algorithm with O(log n) runtime complexity.
    
    Examples:
    
    [4,5,6,7,0,1,2], target = 0
    return 4
    
    [0,1,2,4,5,6,7], target = 0
    return 0
    
    [90,100,0,2,5,10,70], target = 90
    return 0
    
    [0,2,5,10,70,90,100], target = 90
    return 5
    
    [100,90,0,2,5,10,70], target = 0
    return 2
    
    [8,1,2,3,4,5,6,7], target = 6
    return 6
    
    [8,7,1,2,3,4,5,6], target = 6
    return 7    
    
    [8,7,6,1,2,3,4,5], target = 6
    return 2
    
    [8,7,6,3,4,5], target = 3
    return 3
    
    */
    if (nums.length === 1)
        return nums[0] === target ? 0 : -1;
        
    return binSearch(nums, 0, nums.length-1, target);
    
};

var binSearch = function (nums, lower, upper, target) {
    
    if (lower > upper) return -1;
    
    if (nums[lower] === target) return lower;
    if (nums[upper] === target) return upper;
    
    // const mid = lower + Math.floor((upper - lower)/2);
    const mid = Math.floor((lower + upper)/2);
    // console.log("Lower: "+lower);
    // console.log("Mid: "+mid);
    // console.log("Upper: "+upper);
    
    if (nums[mid] === target) {
        return mid;
    }
    
    if (nums[lower] <= nums[mid]) {
        if (target > nums[mid] || target < nums[lower])
            return binSearch(nums, mid+1, upper, target);
        else
            return binSearch(nums, lower, mid-1, target);
    } else  {
        if (target < nums[mid] || target > nums[upper])
            return binSearch(nums, lower, mid-1, target);
        else {
            return binSearch(nums, mid+1, upper, target);
        }
    } 
    return -1;
}