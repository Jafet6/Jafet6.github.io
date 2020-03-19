const person = {
  name:'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const newPerson = Object.assign({},person,lastName); // adicionando um objeto vazio para receber os dois objetos e depois as alterações.
Object.assign(person, lastName);
newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(person);

