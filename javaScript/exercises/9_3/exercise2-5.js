const assert = require('assert')

const myList = [1, 2, 3];

const swap = ([first, second, third]) => swappedList = [third, second, first]; 
swap(myList);

// console.log(swappedList)

assert.equal(swappedList[0], 3)
assert.equal(swappedList[1], 2)
assert.equal(swappedList[2], 1)
    
