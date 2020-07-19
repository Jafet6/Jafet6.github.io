const assert = require('assert');

const addAllnumbers = (arrNumb) => {
  let count = 0;
  for (let i = 0; i < arrNumb.length; i++) {
    count += arrNumb[i];
  }
  return count;
}


const numbers = [9, 23, 10, 3, 8];

const expected = 53;
const output = addAllnumbers(numbers);

assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected);
