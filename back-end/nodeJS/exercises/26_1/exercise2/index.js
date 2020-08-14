const inquirer = require('inquirer');

const question = [
  {
    type: 'number',
    name: 'numberN',
    message: 'digite um número: ',
    validate: function (value) {
      if (typeof value === 'number' && Number.isInteger(value)) return true;
      return console.log('Enter a valid number');
    }
  }
];

const calculateFactorial = (numb) => {
  if (numb < 0) return null;
  if (numb === 0) return 1;
  return numb * calculateFactorial(numb - 1)
}

inquirer.prompt(question).then(({ numberN }) => {
  console.log(calculateFactorial(numberN))
});