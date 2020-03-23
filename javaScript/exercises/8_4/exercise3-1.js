const assert = require('assert');

const greetPeople = (people) => {
  let arrGreeting = [];
  for (const person in people) {
    let greeting = 'Hello ';
    greeting += people[person];
    arrGreeting.push(greeting);
  }
  return arrGreeting;
};

let parameter = ['Irina', 'Ashleigh', 'Elsa'];
let result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
assert.deepEqual(greetPeople(parameter), result);

parameter = ['Jafet', 'Maria', 'Dudu', 'Afranio'];
result = ['Hello Jafet', 'Hello Maria', 'Hello Dudu', 'Hello Afranio'];
assert.deepEqual(greetPeople(parameter), result);

/*
  Use a variável parameter como parâmetro da função acima, escreva testes para verificar
  se a mesma está retornando a como se vê na variável result e, caso não esteja, altere
  o código para que ele passe nos testes. Lembre-se: testes pequenos e numerosos! Escreva
  um por vez e vá corrigindo a função aos poucos:
*/
