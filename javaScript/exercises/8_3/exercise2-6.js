const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

const expectedOne = myFizzBuzz(15);
assert.deepStrictEqual(expectedOne, 'fizzbuzz', 'Fifteen is divisible by 3 and 5: fizzbuzz');


const expectedTwo = myFizzBuzz(6);
assert.deepStrictEqual(expectedTwo, 'fizz', 'Six is divisible by 3 : fizz');

const expectedThree = myFizzBuzz(10);
assert.equal(expectedThree, 'buzz', 'Ten is divisible by 5: buzz');

const expectedFour = myFizzBuzz(14);
assert.strictEqual(expectedFour, 14, 'Fourteen is not divisable either by 3 nor 5: 14');

const expectedFive = myFizzBuzz('hehe');
assert.equal(expectedFive, false, 'hehe is not a number: false');
