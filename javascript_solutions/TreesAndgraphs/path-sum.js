//https://leetcode.com/problems/path-sum-iii/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
 var pathSum = function(root, targetSum) {
    if (!root) return 0;
     
     let count = 0;
     
     if (targetSum === root.val)
         count++;
     
     if (root.left) {
         count += pathSumHelper(root.left, root.val, targetSum);
         count += pathSum(root.left, targetSum);
     }
     if (root.right) {
         count += pathSumHelper(root.right, root.val, targetSum);    
         count += pathSum(root.right, targetSum);
     }
     
     return count;
 };
     
 var pathSumHelper = (node, currSum, targetSum) => {
     if (!node) return 0;
     
     let count = 0;
     
     if (node.val + currSum === targetSum) {
         count++;
     }
     if (node.left || node.right)
         currSum += node.val;
     if (node.left) {
         count += pathSumHelper(node.left, currSum, targetSum);
     }
     if (node.right) {
         count += pathSumHelper(node.right, currSum, targetSum);
     }
     return count;
 };