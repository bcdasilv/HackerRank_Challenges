//Incomplete
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'getMinimumDays' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY parcels as parameter.
 */

function getMinimumDays(parcels) {
   /**
    * N delivery centers, each having parcels[i]
    Each day: 
        Equal number of parcels to be dispatched from each center (that has at least one parcel remaining)
        
        Goal: Find the min number of days needed to deliver all parcels
        
        Example:
        parcels = [2, 3, 4, 3, 3]
        Day 1: deliver 2 parcels from each center
        Day 2: deliver 1 parcel from each center that has parcels
        Day 3: deliver 1 parcel from each center that has parcels
        Result: 3
        
        Example:
        parcels = [1, 5, 5, 5]
        Day 1: deliver 1 parcel
        Day 2: deliver 4  parcels
        Result: 2   
        
        Example:
        parcels = [1, 3, 5, 5]
        Day 1: deliver 1 parcel
        Day 2: deliver 2 parcels
        Day 3: deliver 3 parcels 
        Result: 3         
    */
    
    /**
     * Possible solution 1: 
     * Iterate over the array and save the min (O(n))
     * Iterate over the array and subtract the min over all elems
     *  countDays++
     *  update the min
     *  Loop until the whole array is covered
     *  ** Quadratic runtime complexity **
     */
    
    // let min = updateMin(parcels);
    // let countDays = 0;
    // let totalCount = 0;
    // // console.log(parcels);   
    // // console.log(min);
    // // console.log("***");
    // while(totalCount < parcels.length) {
    //     for (let i = 0; i < parcels.length; i++) {
    //         if (parcels[i] > 0) {
    //             parcels[i] = parcels[i] - min;
    //             if (parcels[i] === 0)
    //                 totalCount++;
    //                 // parcels.splice(i, 1);                
    //         }
    //     } 
    //     countDays++;
    //     min = updateMin(parcels);
    //     // console.log(parcels);  
    //     // console.log(min);
    //     // console.log("***");
    // }
    
    // return countDays;
    
    /**
     * Possible solution 2: 
     * Same as (1) but now optmizing on the "update min"
     * As we run the entire array for the first time
     * Build a linked list to keep an ascending sequence of parcel numbers
     */  
    
    let head = null; //will always point to the min overall
    head = buildMinList(parcels, head);
    console.log(head.data);
    let countDays = 0;
    while(head) {
        for (let i = 0; i < parcels.length; i++) {
            if (parcels[i] > 0) {
                parcels[i] = parcels[i] - head.data;        
            }
        } 
        countDays++;
        head = updateMinList(head);
        // if (head) {
        //     console.log(head.data);        
        // }
    }    
    return countDays;  

}

// function updateMin(parcels) {
//     let min = Number.MAX_SAFE_INTEGER;
//     for (let i = 0; i < parcels.length; i++) {
//         if (parcels[i] > 0 && parcels[i] < min)
//             min = parcels[i];
//     }
//     // console.log(min)
//     return min;    
// }

function updateMinList(head) {
    if (!head)
        return;
    const subtract = head.data;
    let node = head.next;
    while(node) {
        node.data = node.data - subtract;
        node = node.next;
    }
    head = head.next;
    return head;
}

function buildMinList(parcels, head) {
    for (let i = 0; i < parcels.length; i++) {
        if (!head) {
            head = new ListNode(parcels[i]);
        } else {
            let newNode = new ListNode(parcels[i]);
            if (parcels[i] < head.data) { //insert on head
                newNode.next = head;
                head = newNode;
            } else {
                insert(newNode, head);
            }            
        }

    }
    return head;
}

class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;                
    }
}

function insert(newNode, head) {
    if (!head || !newNode)
        return;
    
    let prev = head;
    let node = prev.next;
    while(node) {
        if (newNode.data < node.data) {
            prev.next = newNode; //insert somewhere in the middle
            newNode.next = node;
            return;
        } else if (newNode.data === node.data) {
            return; //don't need to duplicates in this list
        }
        prev = node;
        node = node.next;
    }
    prev.next = newNode; //insert at the end
    newNode.next = node;
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const parcelsCount = parseInt(readLine().trim(), 10);

    let parcels = [];

    for (let i = 0; i < parcelsCount; i++) {
        const parcelsItem = parseInt(readLine().trim(), 10);
        parcels.push(parcelsItem);
    }

    const result = getMinimumDays(parcels);

    ws.write(result + '\n');

    ws.end();
}
