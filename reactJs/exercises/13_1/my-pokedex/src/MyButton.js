import React from 'react';
import './MyButton.css'

class MyButton extends React.Component {
  render(){
    return(
      <button type="button" onClick={this.props.handleClick}>{this.props.label}</button>
    )
  }
}

export default MyButton;
