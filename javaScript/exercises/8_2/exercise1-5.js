const países = {
  França: 'Paris',
  Brasil: 'Brasilia',
  Espanha: 'Madrid',
  Portugual: 'Lisboa',
};
const separeted = () => {
  const pairKeyValue = Object.entries(países);
  for(i in pairKeyValue) {
    console.log('--------');
    console.log('Pais:', pairKeyValue[i][0]);
    console.log('Capital:', pairKeyValue[i][1]);
  };
}
console.log(separeted());
