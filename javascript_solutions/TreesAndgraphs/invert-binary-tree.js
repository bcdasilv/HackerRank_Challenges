//https://leetcode.com/problems/invert-binary-tree/submissions/
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
 * @return {TreeNode}
 */
 var invertTree = function(root) {
    
    if (!root) return null;
    
    if (root.left) {
        invertTree(root.left);
    }
    if (root.right) {
        invertTree(root.right)
    }

    const temp = root.left;
    root.left = root.right;
    root.right = temp;
    
    return root;
};
