const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

const arrayTest = [1, 2, 3, 4];

const expectedArray = arrayTest;
const expectedOne = myRemove(arrayTest, 3);
const expectedTwo = myRemove(arrayTest, 5);

assert.deepStrictEqual(expectedOne, [1, 2, 4], 'Three must be removed');
assert.notDeepEqual(expectedOne, [1, 2, 3, 4], 'Three must be removed');
assert.equal(expectedArray, arrayTest, 'Parameter array must not change');
assert.deepStrictEqual(arrayTest, [1, 2, 3, 4], 'Parameter array must not change');
assert.deepStrictEqual(expectedTwo, expectedArray, 'Parameter array must not change');

