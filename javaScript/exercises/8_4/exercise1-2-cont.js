const assert = require('assert');


const prime = (numb) => {
  arrPrime = [];
  if (numb === 0 || numb === 1) {
    return arrPrime;
  }
  else if (numb === 2) {
    arrPrime.push(2);
    return arrPrime;
  } else {
    for (let i = 3; i < numb; i++) {
      for (let j = 2; j < i; j++) {
        if (i % j != 0 && i % numb === 0) {
          arrPrime.push(numb);
        }
      }
    }
    return arrPrime;
  }
}

console.log(prime(7));

// assert.strictEqual(prime(1), [], 'Assert Error: expected []');
// assert.strictEqual(prime(7), [2, 3, 5], 'Assert Error: expected [2, 3, 5]');
// assert.strictEqual(prime(100), [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47,53, 59, 61, 67, 71, 73, 79, 83, 89, 97], 'Assert Error: expected [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47,53, 59, 61, 67, 71, 73, 79, 83, 89, 97]')