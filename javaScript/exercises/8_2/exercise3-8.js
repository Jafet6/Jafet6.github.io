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

const verifyPair = (lesson, keyStr, valueStr) => {
  let outPut = true;
  for (let i = 0; i < Object.entries(lesson1).length; i++) {
    if (Object.entries(lesson)[i][0] === keyStr) {
      if (Object.entries(lesson)[i][1] === valueStr){
        outPut = true;
        break;
      }
    } else {
      outPut = false;
    }
    //console.log(outPut);
  }
  return outPut;
}

console.log(verifyPair(lesson3, 'professor', 'Maria Clara'));
console.log(verifyPair(lesson3, 'materia', 'Portugues'));