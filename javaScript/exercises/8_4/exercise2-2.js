const assert = require('assert');

const wordLengths = (wordsArr) => {
  let arrCount = [];
  for (let i = 0; i < words.length; i++) {
    arrCount.push(wordsArr[i].length)
  }
  return arrCount;
}


const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);
