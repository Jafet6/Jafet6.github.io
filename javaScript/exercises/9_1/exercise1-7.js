const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const removePerson = (name) => {
  return arrayMyStudents.filter(e => e !== name);
};

console.log(removePerson('Jorge'));