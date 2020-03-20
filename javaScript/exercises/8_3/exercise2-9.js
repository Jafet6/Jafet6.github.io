const assert = require('assert');

function change(param) {
  return !param;
}

assert.ok(change(10) === false)

