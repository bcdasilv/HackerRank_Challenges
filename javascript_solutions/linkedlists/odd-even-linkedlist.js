//https://leetcode.com/problems/odd-even-linked-list/submissions/
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
 var oddEvenList = function(head) {
    if (!head) return null;
    
    if (!head.next || !head.next.next) return head;
    
    let tail = head;

    let prev = head.next; 
    while (prev && prev.next) {
        const temp = prev.next;
        
        const temp2 = tail.next;
        
        tail.next = temp;
  
        prev.next = temp.next;
        
        temp.next = temp2;
        
        //swap done, prep for next iteration
            
        tail = temp;
        
        prev = prev.next;
        
        // let printNode = head;
        // while(printNode) {
        //     console.log(printNode.val);
        //     printNode = printNode.next;
        // }
        // console.log("...");
    }
    return head;
};