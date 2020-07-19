const getChange = (payable, paid) => {
  const coins = [200, 100, 50, 20, 10, 5, 2, 1];
  let diference = paid - payable;
  const changeReturn = [];
  if (diference >= 0) {
    while (diference !== 0) {
      for (let i = 0; i < coins.length; i++) {
        if (diference - coins[i] >= 0) {
          diference -= coins[i];
          changeReturn.push(coins[i]);
          break;
        }
      }  
    }
  } else {
    throw new Error('paid value is not enough');
    }
    return changeReturn;
  }
  
  const assert = require('assert');
  
  let result = getChange(1, 1); // no change/coins just an empty array
  let expected = [];
  assert.deepEqual(result, expected);
  
  result = getChange(215, 300); // expect an array containing [50, 20, 10, 5]
  expected = [50, 20, 10, 5];
  assert.deepEqual(result, expected);
  
  result = getChange(486, 600); // expect an array containing [100, 10, 2, 2]
  expected = [100, 10, 2, 2];
  assert.deepEqual(result, expected);
  
  result = getChange(12, 400); // expect an array containing [200, 100, 50, 20, 10, 5, 2, 1]
  expected = [200, 100, 50, 20, 10, 5, 2, 1];
  assert.deepEqual(result, expected);
  
  assert.throws(() => { getChange(100, 10); }, /^Error: paid value is not enough$/);

// const getChange = (payable, paid) => {
//   const coins = [200, 100, 50, 20, 10, 5, 2, 1];
//   let diference = paid - payable;
//   const changeReturn = [];
//   if (diference >= 0) 
//     for (let i = 0; i < coins.length; i++) {
//       if (diference - coins[i] >= 0) {
//         diference -= coins[i];
//         changeReturn.push(coins[i]);
//         for (let j = i; j < coins.length; j++) {
//           if (diference - coins[i] >= 0) {
//             diference -= coins[i];
//             changeReturn.push(coins[i]);
//           }
//         }
//       }
//     }
//   return changeReturn;
//  }

//console.log(getChange(486, 600));

