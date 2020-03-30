const assert = require('assert');

const greet = (name, greetings = 'Hi') => {
  return `${greetings} ${name}`;
};

//console.log(greet('John'));

assert.equal(greet("John"), "Hi John")
assert.equal(greet("John", "Good morning"), "Good morning John")
assert.equal(greet("Isabela", "Oi"), "Oi Isabela")
    
