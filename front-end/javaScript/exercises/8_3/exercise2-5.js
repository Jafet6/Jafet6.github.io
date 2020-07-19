const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

const arrayImutableOne = [1, 2, 3, 4];
const arrayImutableTwo = [1, 2, 4];

const arrayTest = [1, 2, 3, 4];
const arrayTestTwo = [1, 2, 3, 4];

console.log(arrayTest);
myRemoveWithoutCopy(arrayTest, 3);
console.log(arrayTest);

const expectedOne = myRemoveWithoutCopy(arrayTest, 3);
const expectedTwo = myRemoveWithoutCopy(arrayTestTwo, 5);

assert.deepStrictEqual(expectedOne, arrayImutableTwo, 'Number three must be removed');
assert.deepEqual(expectedOne, arrayImutableTwo, 'Number three must be removed');
assert.notEqual(expectedOne, [1, 2, 3, 4], 'Number three must be removed and arraytest must be preserved');
assert.deepStrictEqual(expectedTwo, arrayImutableOne, 'Nothing must change in arrayTest');
