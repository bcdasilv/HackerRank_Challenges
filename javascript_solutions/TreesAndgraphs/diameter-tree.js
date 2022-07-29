//https://leetcode.com/problems/diameter-of-binary-tree
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
 * @return {number}
 */
 var diameterOfBinaryTree = function(root) {
    if (!root || (!root.left && !root.right)) return 0;
    
    let leftHeight = 0;
    let rightHeight = 0;
    if (root.left)
        leftHeight = 1 + getHeight(root.left);
    if (root.right)
        rightHeight = 1 + getHeight(root.right);
    
    // console.log(leftHeight);
    // console.log(rightHeight);
    
    const sum = leftHeight + rightHeight;
    
    let diamLeftBranch = 0;
    let diamRightBranch = 0;
    
    if (root.left)
        diamLeftBranch = diameterOfBinaryTree(root.left);
    if (root.right) 
        diamRightBranch = diameterOfBinaryTree(root.right);
   
    return Math.max(sum, diamLeftBranch, diamRightBranch);
    // return sum;
};


var getHeight = (node) => {
    
    if (!node.left && !node.right) return 0;
    
    let leftHeight = 0;
    let rightHeight = 0;
    
    if (node.left)
        leftHeight = 1 + getHeight(node.left);
    if (node.right)
        rightHeight = 1 + getHeight(node.right); 
    
    return Math.max(leftHeight, rightHeight);
};