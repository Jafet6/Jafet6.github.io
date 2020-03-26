const notes = {
  portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};

const passed = (arrNotes) => Object.values(arrNotes).every(e => e === 'Aprovado');

console.log(passed(notes));