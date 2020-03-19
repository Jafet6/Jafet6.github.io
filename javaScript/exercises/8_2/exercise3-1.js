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

const addLesson2 = (obj, param2, val) => obj[param2] = val; //porque com o obj.param2 = val não funciona?


addLesson2(lesson2, 'turno', 'manhã');

console.log(lesson2)