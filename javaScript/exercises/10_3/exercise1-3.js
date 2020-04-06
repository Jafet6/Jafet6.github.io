const arrDivision = (numb) => {
  const arrDivi = [2, 3, 5, 10];
  return arrDivi.map(e => numb / e);
};
// console.log(arrDivision(10));

const promise = async () => {
  const arr = Array.from({length: 10}, () => Math.floor(Math.random() * 50))
  const sumSquared = arr.map(e => e * e).reduce((acc, element) => acc + element);
  if (sumSquared < 8000) {
    const division = await arrDivision(sumSquared);
    const sum =  division.reduce((a, e) => a + e)
    console.log(sum);
  }
  else {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!')
  } 
}

promise()