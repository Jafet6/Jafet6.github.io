const assert = require('assert');

function isAbove(num1, num2) {
  return num1 > num2;
}


assert.strictEqual(isAbove(2, 3), false, 'Two is not greater than three');
assert.strictEqual(isAbove(6, 4), true, 'Six is greater than four');