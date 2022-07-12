//https://leetcode.com/problems/remove-nth-node-from-end-of-list/submissions/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    /*
    Iterate over the linked list
    For each node, save on a map its position/index (key) and its value (node obj)
    After it hits the end, subtract n from the last position, add 1, 
    Take the result and access the map with result - 1 (prev).
    Also take the result and accesa the map with result (current)
    prev.next = current.next
    return head
    */
    
    if (!head || !head.next) return null;
    
    let node = head;
    let position = 0;
    const nodesMap = new Map();
    
    while(node!=null) {
        position++;
        nodesMap.set(position, node);
        node = node.next;
    }
    
    const toDel = nodesMap.get(position - n + 1);
    let prev = null;
    if (position - n != 0) {//if first node then there's no prev
        prev = nodesMap.get(position - n + 1 - 1);
        prev.next = toDel.next;
    } else {
        head = toDel.next;
    }
    
    return head;
};