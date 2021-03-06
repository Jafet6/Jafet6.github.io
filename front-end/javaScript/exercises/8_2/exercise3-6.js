const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const objectAssign = () => {
  let allLessons = {};
  allLessons['lesson1'] = {};
  allLessons['lesson2'] = {};
  allLessons['lesson3'] = {};
  Object.assign(allLessons.lesson1, lesson1);
  Object.assign(allLessons.lesson2, lesson2);
  Object.assign(allLessons.lesson3, lesson3);
  return allLessons;
};

const numberOfStudents = () => {
  l1 = objectAssign().lesson1.numeroEstudantes;
  l2 = objectAssign().lesson2.numeroEstudantes;
  l3 = objectAssign().lesson3.numeroEstudantes;
  return l1 + l2 + l3;
};
console.log(numberOfStudents());