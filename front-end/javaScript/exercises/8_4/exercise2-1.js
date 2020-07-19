const assert = require('assert');

const addOne = (arr) => {
  let arrPlusOne = Object.assign([], arr);
  for (let i = 0; i < arrPlusOne.length; i++) {
    arrPlusOne[i]++;
  }
  return arrPlusOne;
}


const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepEqual(output, expected);
assert.deepEqual(myArray, unchanged);
