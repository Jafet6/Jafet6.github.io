const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const firstLetter = (letter, arrNames) => {
  return arrNames.some(e => e[0] === letter);
};

console.log(firstLetter('W', listNames));
console.log(firstLetter('A', listNames));