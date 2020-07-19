import React, { useContext } from 'react';
import { CountsContext } from '../Providers/Provider';

const Inputs = () => {
  const {
    handleChange,
    inputs: { input1, input2, input3 },
  } = useContext(CountsContext);
  
  return (
    <div>
      <div>
        <label htmlFor="number1">
          Número 1
          <input onChange={(e) => handleChange(e)} name="input1" type="number" id="number1" />
        </label>
        <label htmlFor="number2">
          Número 2
          <input onChange={(e) => handleChange(e)} name="input2" type="number" id="number2" />
        </label>
        <label htmlFor="number3">
          Número 3
          <input onChange={(e) => handleChange(e)} name="input3" type="number" id="number3" />
        </label>
      </div>
      <div>
        <span>{input1 + input2 + input3}</span>
      </div>
    </div>
  )
}

export default Inputs;
