const inquirer = require('inquirer');

const question = [
  {
    type: 'number',
    name: 'fibonacciN',
    message: 'how many fibonacci numbers do you want?',
    validate: function(value) {
      if (typeof value === 'number' && Number.isInteger(value)) return true;
      return 'Type a valid number'
    }
  }
];

const showFibonacciNumbers = (numb) => {
  console.log(0);
  console.log(1);
  let previousNumb1 = 0;
  let previousNumb2 = 1;
  for (let i = 2; i < numb; i++) {
    const nextNumb = previousNumb1 + previousNumb2;
    previousNumb1 = previousNumb2;
    previousNumb2 = nextNumb;
    console.log(nextNumb);
  }
};

// const fibonacci = (numb) => {
//   if (numb === 0) {
//     return 0;
//   } else if (numb == 1) {
//     return 1;
//   } else {
//     return fibonacci(numb - 1) + fibonacci(numb -2)
//   }
// }

// const fibonacciLoop = (numb) => {
//   for (let i = 0; i < numb; i++) {
//     console.log(fibonacci(i))
//   }
// }

inquirer.prompt(question).then(({ fibonacciN }) => {
  showFibonacciNumbers(fibonacciN)
});
