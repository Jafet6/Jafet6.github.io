import React from 'react';
import './Button.css'

const Button = (props) => {
  const { showComponent, isDisable, content } = props;
  return (
    <div
      disabled={isDisable}
      onClick={() => showComponent()}
      className="click-div"
    >
      {content}
    </div>
  )
}
export default Button;
