//https://leetcode.com/problems/sort-list/submissions/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var sortList = function(head) {
    /*
       Iterater over the LL with two pointers: fast and slow. 
       Fast goes 2x as fast as slow, so in the end slow will be in the mid while fast in the last node.
       With that, run merge sort (head to slow/mid, slow/mid to fast)
       That means, execute this logic recursevely until the base case (only one node)
       
       Then the merge part:
       for each node in l1 and l2
       if nodeL2 is < nodeL1, insert nodeL2 before nodeL1
       otherwise nodeL1 = nodeL1.next, until condition above or end of the list.
       if end of L1, insert nodeL2 after nodeL1 (end of the list)
       and all other elements of L2.
    */
    
    if (!head) return null;
    
    if (head && !head.next) return head;
    
    let slow = head;
    let fast = head.next;
    
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next;

    }
   
    const mid = slow.next;
    slow.next = null;
    
    let l1 = sortList(head);
    let l2 = sortList(mid);
    
    return merge(l1, l2);
};


var merge = (l1, l2) => {
    if (!l1) return l2;
    if (!l2) return l1;
    
    let n1 = l1;
    let prev;

    while (l2) {
        if (l2.val < n1.val) { //insert l2 node into somewhere in the middle of l1
            const nextN2 = l2.next;
            l2.next = n1;
            if (!prev) {
                l1 = l2;
                prev = l2;
            }
            else {
                prev.next = l2;
                prev = l2;
            }
            l2 = nextN2;
        } else {
            if (n1.next) {//iteraet l1, keep looking
                prev = n1;
                n1 = n1.next;
            }
            else { // hit the end, insert l2 nodeS into the end of l1
                n1.next = l2;
                return l1;
            }
        }
    }
    return l1;
    
}
