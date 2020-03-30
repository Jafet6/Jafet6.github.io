const assert = require('assert');

const passwordVerifier = (pass) => {
  let verify = false;
  const regex = /\d/g;
  if (
    pass.length >= 8 &&
    pass != null &&
    pass.toUpperCase() != pass &&
    pass.toLowerCase() != pass &&
    regex.test(pass)
    ) {
    verify = true;
  } else {
    verify = false;
  }
  return verify;
}

passwordValid = 'ANf19560';
passWordInvalid = 'ANF19560';
passWordInvalid1 = 'anf19560';
passWordInvalid2 = 'ANFANFANF';
passWordInvalid3 = 'anfanfanfanf';

assert.strictEqual(passwordVerifier(passwordValid), true);
assert.strictEqual(passwordVerifier(passWordInvalid), false);
assert.strictEqual(passwordVerifier(passWordInvalid1), false);
assert.strictEqual(passwordVerifier(passWordInvalid2), false);
assert.strictEqual(passwordVerifier(passWordInvalid3), false);


// Add the following verifications to a master function called “Verify()”

// password should be larger than 8 chars
// password should not be null
// password should have one uppercase letter at least
// password should have one lowercase letter at least
// password should have one number at least
// Each one of these should throw an exception with a different message of your choosing

// Add feature: Password is OK if at least three of the previous conditions is true
// Add feature: password is never OK if item 1.4 is not true.
// Assume Each verification takes 1 second to complete. How would you solve items 2 and 3 so tests can run faster?