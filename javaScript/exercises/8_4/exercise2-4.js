const assert = require('assert');

const findTheNeedle = (arrWords, strWord) => {
  let index = 0;
  for (let i = 0; i < arrWords.length; i++) {
    if (arrWords[i] === strWord) {
      index = i;
      break;
    } else {
      index = -1;
    }
  }
  return index;
}


let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);
