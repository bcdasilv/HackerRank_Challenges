//https://leetcode.com/problems/palindrome-linked-list/submissions/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    
    if (!head) return null;
    
    let node = head;
    const arr = [];
    while (node) {
        arr.push(node);
        node = node.next;
    }
    
    let i = 0;
    let j = arr.length - 1;
    while (i <= j ) {
        if (arr[i].val != arr[j].val)
            return false;
        i++;
        j--;
    }
    return true;
};

//Following solution is much simpler but not faster than previous one.
//Dealing with str comparison is slower than comparing arrays.
// var isPalindrome = function(head) {
    
//     if (!head) return null;
    
//     let node = head;
//     let str = "";
//     let strRev = "";
//     while (node) {
//         str += node.val;
//         strRev = node.val + strRev;
//         node = node.next;
//     }
    
//     return (str === strRev)
// };
