/**
 * Given a binary tree of integers, return an array in which each element
 * is the avg of the numbers of each level of the tree
 */

/**
 *      4
 *     /  \
 *  7       9
 * / \       \
 * 10 2        6
 *     \
 *      6
 *     /
 *    2
 * 
 * Output: [4, 8, 6, 6, 2]
 *
 */

class Node {
    constructor(val, left, right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

/**
 * 
 * Perform DFS, maitaining an array where index is the level
 * and the value is the avg of that level
 * Space complexity: O(l) where l is the number of levels in the tree.
 * In the worst case scenario, l = n (where n is the number of nodes)
 * But it already optmizes the space compared to O(n)
 * The runtime complexity is O(n) since we have to traverse the whole tree.
 * Best conceivable runtime.
 */
const walkThroughDFS = (node, result, level) => {
    if (!node) return null;

    if (result[level])
        result[level] = (result[level] + node.val)/2;
    else 
        result[level] = node.val;

    walkThroughDFS(node.left, result, level +1);
    walkThroughDFS(node.right, result, level +1);

}

/**
 * 
 * Created just to exercise BFS
 * Printing out nodes using BFS
 */
const walkThroughBFS = (node, result, level) => {
    if (!node) return null;

    const queue = [];
    queue.push(node);
    while (queue.length > 0) {
        const curr_node = queue.shift();
        console.log(curr_node.val);  
        if (curr_node.left) {
            queue.push(curr_node.left);
        } 
        if (curr_node.right) {
            queue.push(curr_node.right);
        }
    }
}

const getAverages = (node) => {
    if (!node) return null;

    if (!node.left && !node.right) return node.val;

    const result = [];
    walkThroughDFS(node, result, 0);
    return result;
}

const twoLeaf = new Node(2, null, null);
const sixLeft = new Node(6, twoLeaf, null);
const two = new Node(2, null, sixLeft);
const ten = new Node(10, null, null);
const seven = new Node(7, ten, two);
const sixRight = new Node(6, null, null);
const nine = new Node(9, null, sixRight);
const root = new Node(4, seven, nine);

walkThroughBFS(root);
console.log(getAverages(root));

/**

result: [4, 8, 6, 6, 2]
 */

/**
 *      4
 *     /  \
 *  7       9
 * / \       \
 * 10 2        6
 *     \
 *      6
 *     /
 *    2
 * 
 * Output: [4, 8, 6, 6, 2]
 *
 */