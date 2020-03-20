const sum = (numb1, numb2) => numb1 + numb2;

const assert = require('assert');

const expected = sum(2, 3);

assert.equal(expected, 5, '2 + 3 = 5');

assert.notEqual(expected, 3, '2 + 3 = 5');

assert(expected === 5, '2 + 3 = 5');

assert.ok(expected === 5, '2 + 3 = 5');

assert.deepStrictEqual(expected, 5, '2 + 3 = 5');
