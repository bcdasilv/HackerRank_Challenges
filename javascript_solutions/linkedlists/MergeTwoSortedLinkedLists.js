//https://www.hackerrank.com/challenges/merge-two-sorted-linked-lists/problem?isFullScreen=true
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const SinglyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }
};

function printSinglyLinkedList(node, sep, ws) {
    while (node != null) {
        ws.write(String(node.data));

        node = node.next;

        if (node != null) {
            ws.write(sep);
        }
    }
}

// Complete the mergeLists function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function mergeLists(head1, head2) {
    if (head1 && !head2) return head1;
    if (!head1 && head2) return head2;
    if (!head1 && !head2) return null;
    let headMerged = null;
    let node = null
    let node1 = head1;
    let node2 = head2;
    while(node1 || node2){
        let newNode = new SinglyLinkedList();
        if (!node) {
            node = newNode;
        } else {
            node.next = newNode;
            node = node.next;
        }
        
        if (node1 && !node2){
            node.data = node1.data;
            node.next = null;
            node1 = node1.next;
        }
        else if (!node1 && node2){
            node.data = node2.data;
            node.next = null;
            node2 = node2.next;        
        }
        else {
            let nodeTemp = new SinglyLinkedList();
            if (node1.data <= node2.data){
                // node.data = node1.data;
                // node.next = null;
                // if (!headMerged) headMerged = node;
                node.data = node1.data;
                nodeTemp.data = node2.data;
                nodeTemp.next = null;
                node.next = nodeTemp;
                if (!headMerged) headMerged = node;
            } else {
                node.data = node2.data;
                nodeTemp.data = node1.data;
                nodeTemp.next = null;
                node.next = nodeTemp;
                if (!headMerged) headMerged = node;
            }  
            node = nodeTemp;
            node1 = node1.next;
            node2 = node2.next;          
        }
    }
    return headMerged;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const tests = parseInt(readLine(), 10);

    for (let testsItr = 0; testsItr < tests; testsItr++) {
        const llist1Count = parseInt(readLine(), 10);

        let llist1 = new SinglyLinkedList();

        for (let i = 0; i < llist1Count; i++) {
            const llist1Item = parseInt(readLine(), 10);
            llist1.insertNode(llist1Item);
        }
      
      	const llist2Count = parseInt(readLine(), 10);

        let llist2 = new SinglyLinkedList();

        for (let i = 0; i < llist2Count; i++) {
            const llist2Item = parseInt(readLine(), 10);
            llist2.insertNode(llist2Item);
        }

        let llist3 = mergeLists(llist1.head, llist2.head);

        printSinglyLinkedList(llist3, " ", ws)
        ws.write("\n");
    }

    ws.end();
}
