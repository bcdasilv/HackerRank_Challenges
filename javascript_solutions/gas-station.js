//leetcode: https://leetcode.com/problems/gas-station
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
 var canCompleteCircuit = function(gas, cost) {
    let tank = 0;
    let start = -1;
    let i = 0;
    let looped = false;
    while (start != i) {
        if (gas[i] + tank >= cost[i]) { //can make it to the next station?
            tank += gas[i] - cost[i]; // yes, update tank
            if (start === -1) { // just found a starting point
                start = i;
            }
        }
        else if (start != -1 && !looped) { //Cannot make it and hasn't looped
            start = -1;  // reset
            tank = 0; //reset tank
        } else if (start != -1 && looped) // Cannot make it and has looped
            return -1; // then, there's no solution
        
        //Section of code for deadling with index and looping
        if (start != -1 && i === gas.length - 1) { //onTrack and reached the end of the array
            i = 0; //loop back to the beginning (circuit)
            looped = true;
        }
        else if (start === -1 && i === gas.length - 1) // off track and reached the end of the array
            return -1; // then, there's no solution
        else
            i++;
    }
    return start;
};

/*
i = 
start = 
tank = 
*/
