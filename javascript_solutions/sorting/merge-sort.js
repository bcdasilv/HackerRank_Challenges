//https://leetcode.com/problems/sort-an-array/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArray = function(nums) {
    if (nums.length === 1)
        return nums;    
 
     nums = mergeSort(nums);
     return nums;
 };
 
 var mergeSort = (nums) => {
     
     if (nums.length === 1) return nums;
        
     const mid = nums.length/2;
     
     const arr_left = mergeSort(nums.slice(0, mid)); //second index is not included
     const arr_right = mergeSort(nums.slice(mid, nums.length)); //first index is included
     const result = merge(arr_left, arr_right);
     return result;
 };
 
 var merge = (arr_left, arr_right) => {
     
     const merged = [];
     
     let i = 0;
     let j = 0;
     let k = 0;
 
     while (i < arr_left.length && j < arr_right.length) {
         if (arr_left[i] > arr_right[j]) {
             merged[k] = arr_right[j];
             j++;
             k++;
         } else {
             merged[k] = arr_left[i];
             i++;
             k++;
         }
     }
     
     //left array leftovers
     while( i < arr_left.length) {
         merged[k] = arr_left[i];
         k++;
         i++;
     }
     
    //right array leftovers
     while( j < arr_right.length) {
         merged[k] = arr_right[j];
         k++;
         j++;
     }  
     return merged;
 };
 
 /*
 [5,2,3,1]
 
 [5,2] => [2,5]
 [3,1] => [1,3]
 
 [1,3], [2,5]
 
 i = 2;
 j = 2;
 k = 4;
 merged = [1, 2, 3, 5]
 
 */