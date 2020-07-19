import React, { useContext } from "react";
import { CountsContext } from '../Providers/Provider';

const MyButton = () => {
 const { handleClick } = useContext(CountsContext)
  return (
    <div>
      <button onClick={handleClick} type="button">
        Click Redux
      </button>
    </div>
  )
}

export default MyButton;
