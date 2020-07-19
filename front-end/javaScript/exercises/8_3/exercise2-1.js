const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

const expectedOne = sum(4, 5);
const expectedTwo = sum(0, 0);
const expectedThree = sum(4, '5');
const expectedFour = sum(4, '5');

assert.equal(expectedOne, 9, 'Four + Five = Nine');
assert.equal(expectedTwo, 0, 'Zero + Zero = Zero');
assert.notEqual(expectedThree, 9, 'Strings doesnt sum')
assert.deepStrictEqual(expectedFour, 'parameters must be numbers', 'Strings doesnt sum')
