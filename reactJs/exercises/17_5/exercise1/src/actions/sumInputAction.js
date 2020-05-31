const NUMBER1 = 'NUMBER1';
const NUMBER2 = 'NUMBER2';
const NUMBER3 = 'NUMBER3';

const sumInput1 = (inputNumber1) => {
  // console.log('input1: ', inputNumber1);
  return {
    type: NUMBER1,
    value: inputNumber1,
  };
};

const sumInput2 = (inputNumber2) => {
  console.log('input2: ', inputNumber2);
  return {
    type: NUMBER2,
    value: inputNumber2,
  };
};

const sumInput3 = (inputNumber3) => {
  console.log('input3: ', inputNumber3);
  return {
    type: NUMBER3,
    value: inputNumber3,
  };
};

export { sumInput1, sumInput2, sumInput3, NUMBER1, NUMBER2, NUMBER3 }
