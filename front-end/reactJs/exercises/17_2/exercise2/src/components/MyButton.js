import React from "react";
import { connect } from 'react-redux';
import { addClickCount } from '../actions/addClickAction';

class MyButton extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.click()} type="button">
          Click Redux
        </button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  click: () => dispatch(addClickCount())
})

export default connect(null, mapDispatchToProps)(MyButton);
