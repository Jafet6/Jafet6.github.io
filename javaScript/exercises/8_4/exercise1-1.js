const assert = require('assert');

arrValid = [
  [1, 2, 4, 8],
  [1, 2, 13]
]

arrInvalid = [
  [1, 3, 4, 8],
  [1, 2, 7]
]


const arrayValidation = (arr) => {
  let test = true
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0 || arr[i] % 5 === 0 || arr[i] % 7 === 0 || arr[i] % 11 === 0) {
      test = false;
      break;
    } else {
      test = true;
    }
  }
  return test;
};

// console.log(arrayValidation(arrInvalid[1]));
// console.log(arrayValidation(arrValid[1]))

assert.equal(arrayValidation(arrInvalid[1]), false, 'Este array não possui multiplos de 3, 5, 7 ou 11');
assert.equal(arrayValidation(arrValid[1]), true, 'Este array possui multiplos de 3, 5, 7 ou 11');