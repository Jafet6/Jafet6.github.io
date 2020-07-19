const assert = require('assert');

function myIndexOf(arr, item) {
  let searchedIndex = -1;
  for (let i = 0; i < arr.length; i += 1) {
    if (item === arr[i]) {
      searchedIndex = i;
    }
  }
  return searchedIndex;
}

const arrayTest = [1, 2, 3, 4];
const itemTestOne = 3;
const itemTestTwo = 5;

const expectedOne = myIndexOf(arrayTest, itemTestOne)
const expectedTwo = myIndexOf(arrayTest, itemTestTwo)

assert.equal(expectedOne, 2, 'Error, itemTestOne exists in the array: index 2');
assert.equal(expectedTwo, -1, 'Error, itemTestOne doesnt exists in the array: index -1')
