// # Given an array of arrays, implement an iterator class to allow the client to 
// # traverse and remove elements in the array list in place.  
// # This iterator should provide three public class member functions

// # boolean hasNext()
// #     return true if there is another element in the whole structure

// # int next()
// #     return the value of the next element in the structure

// # void remove()
// #     remove (from the underlying collection) the last element returned by the iterator.
// #     That is, remove the element that the previous next() returned
// #     This method can be called only once per call to next(), 
// #     otherwise an exception will be thrown.

// #     The behavior of an iterator is unspecified if the underlying collection is 
// #     modified while the iteration is in progress in any way other than by calling 
// #     this method.

// Example: 
// Given: [[],[1,2,3],[4,5],[],[],[6],[7,8],[],[9],[10],[]]

// hasNext() -> true
// next() -> 1

// hasNext -> true because 2
// next() -> 2
// remove() -> remove 2 
// hasNext() -> true
// remove() -> error
// next() -> 3
        
// Print:  1 2 3 4 5 6 7 8 9 10
    
// [[1,2,3], [2]]
//if on 3
//hasNext -> true
// [[1,2,3], []]
//if on 3
//hasNext -> false

class Iterator {

    cursor = 0;
    index = 0;
    nextCalled = false;
    arr = [];

    constructor(arr) {
        this.arr = arr;
    }
    
    //return true if there is another element in the whole structure
    hasNext() { 
        
        const innerArr = arr[this.cursor];

        if (innerArr.length > 0 && this.index < innerArr.length - 1) {
            return true;
        }
        
        //If this is true check the next innerArr
        if (innerArr.length == 0 || this.index >= innerArr.length - 1) {
            let nextInner;
            let count = this.cursor;
            while(count < this.arr.length - 1) {
                count++;
                nextInner = this.arr[count];
                if (nextInner.length > 0)
                    return true;
            }
            return false;
        }

    }
    
    //return the value of the next element in the structure
    next() {
        this.nextCalled = true;
        if (this.hasNext()) { 
            //if there's next, it's either inside the same inner array
            // or the first element of another inner array 
            const innerArr = arr[this.cursor];
            if (innerArr.length > 0 && this.index < innerArr.length - 1) {
                this.index++;
                return innerArr[this.index]; 
            }
            //If this is true check the next innerArr
            if (innerArr.length == 0 || this.index >= innerArr.length - 1) {
                let nextInner;
                let count = this.cursor;
                while(count < this.arr.length - 1) {
                    count++;
                    nextInner = this.arr[count];
                    if (nextInner.length > 0) {
                        this.cursor = count;
                        this.index = 0;
                        return nextInner[0];
                    }
                }
            }            
        }
        throw new Error("No next! Already in the last elem.");
    }
    
    remove() {
        if (this.nextCalled) {
            this.arr[this.cursor].splice(this.index, 1);
            this.nextCalled = false;
        } else {
            throw new Error("Need to call next() for each remove()");
        }
    }
}

const arr = [[],[1,2,3],[4,5],[],[],[6],[7,8],[],[9],[10],[]];
// const arr = [[], [1,2,4], [], []];
const iterator = new Iterator(arr);
// console.log(iterator.hasNext());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
iterator.remove();
iterator.remove();
console.log(iterator.next());
console.log(iterator.next());
// console.log(iterator.next());
console.log(iterator.arr);
