//https://leetcode.com/problems/balanced-binary-tree/
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
 * @return {boolean}
 */
 var isBalanced = function(root) {
    if (!root) return true;
    
    let leftHeight = 0;
    let rightHeight = 0;
    if (root.left)
        leftHeight = 1 + getHeight(root.left);
    if (root.right)
        rightHeight = 1 + getHeight(root.right);
    
    return Math.abs(leftHeight - rightHeight) > 1 ? false : isBalanced(root.left) && isBalanced(root.right);
};

var getHeight = (node) => {
    if (!node) return 0;
    
    let leftHeight = 0;
    let rightHeight = 0;
    
    if (node.left)
        leftHeight = 1 + getHeight(node.left);
    if (node.right)
        rightHeight = 1+ getHeight(node.right); 
    
    return Math.max(leftHeight, rightHeight);
};