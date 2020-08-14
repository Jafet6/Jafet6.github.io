// using readline-sync

// const readline = require('readline-sync');

// const { questionFloat } = readline;

// const calculateIMC = () => {
//   const weight = questionFloat('What is your weight?');
//   const height = questionFloat('What is your height?');

//   const IMC = weight / Math.pow(height, 2)
//   return IMC
// };

// const IMCSituation = (IMC) => {
//   switch (true) {
//     case (IMC < 18.5):
//       return console.log('Below Weight');
//     case (IMC >= 18.5 && IMC <= 24.9):
//       return console.log('Normal Weight');
//     case (IMC >= 25 && IMC <= 29.9):
//       return console.log('Above Weight');
//     case (IMC >= 30 && IMC <= 34.9):
//       return console.log('grade 1 obesity');
//     case (IMC >= 35 && IMC <= 39.9):
//       return console.log('grade 2 obesity');
//     default: 
//       return console.log('grade 3 obesity')
//   }
// }

// IMCSituation(calculateIMC());



// using inquirer

const inquirer = require('inquirer');

console.log('Welcome to your IMC calculator');

const questions = [
  {
    type: 'number',
    name: 'weight',
    message: 'What is your weight?',
    validate: function(value) {
      if (typeof value === 'number') return true;
      return 'enter a valid number'
    }
  },
  {
    type: 'number',
    name: 'height',
    message: 'What is your height?',
    validate: function(value) {
      if (typeof value === 'number') return true;
      return 'enter a valid number'
    }
  },
]

const calculateIMC = (weight, height) => {
  const IMC = weight / Math.pow(height, 2)
  return IMC
};

const IMCSituation = (IMC) => {
  switch (true) {
    case (IMC < 18.5):
      return console.log('Below Weight');
    case (IMC >= 18.5 && IMC <= 24.9):
      return console.log('Normal Weight');
    case (IMC >= 25 && IMC <= 29.9):
      return console.log('Above Weight');
    case (IMC >= 30 && IMC <= 34.9):
      return console.log('grade 1 obesity');
    case (IMC >= 35 && IMC <= 39.9):
      return console.log('grade 2 obesity');
    default: 
      return console.log('grade 3 obesity')
  }
}

inquirer.prompt(questions).then(({ weight, height }) => {
  IMCSituation(calculateIMC(weight, height))
});
