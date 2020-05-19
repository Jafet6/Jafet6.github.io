import React from 'react';
import './MyButton.css'

class MyButton extends React.Component {
  render(){
    const { label, handleClick } = this.props;
    return(
      <button type="button" onClick={() => handleClick(label)}>{label}</button>
    )
  }
}

export default MyButton;
