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

const reportTeacher = (lessons, name) => {
  let countStu = 0;
  let aula = [];
  const objReport = {};
  for (let i = 0; i < Object.keys(lessons).length; i++) {
    if (Object.values(lessons)[i].professor === name) {
      countStu += Object.values(lessons)[i].numeroEstudantes;
      aula.push(Object.values(lessons)[i].materia);
    }
  }
  objReport.professor = name;
  objReport.aulas = aula;
  objReport.estudantes = countStu;
  return objReport
}

//console.log(Object.values(objectAssign()));
console.log(reportTeacher(objectAssign(), 'Carlos'));