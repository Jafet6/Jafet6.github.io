const assert = require('assert');

const removeMiddle = (arrWords) => {
  const length = Math.ceil(((arrWords.length) / 2) - 1);
  const middle = arrWords.splice(length, 1);
  return middle;
}


const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepEqual(output, expectedOutput);
assert.deepEqual(words, expectedWords);
