const assert = require('assert');

function mySum(arr) {
  let result = 0;
  for (let item in arr) {
    result += arr[item];
  }
  return result;
}

const arrayTestOne = [1, 2, 3, 4];
const arrayTestTwo = [1, -2, -3, 4];

const expectedOne = mySum(arrayTestOne);
const expectedTwo = mySum(arrayTestTwo);

assert.deepStrictEqual(expectedOne, 10, 'One + Two + Three + Four = Ten');
assert.notEqual(expectedOne, 5, 'One + Two + Three + Four = Ten');
assert.ok(expectedTwo === 0, 'One - Two - Three, + FOur = Zero')
