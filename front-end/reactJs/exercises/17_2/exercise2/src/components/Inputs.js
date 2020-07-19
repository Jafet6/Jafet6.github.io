import React from 'react';
import { connect } from 'react-redux';
import { sumInput1, sumInput2, sumInput3 } from '../actions/sumInputAction';


class Inputs extends React.Component {
  render() {
    return (
      <div>
        <div>
          <label htmlFor="number1">
            Número 1
            <input onChange={(e) => this.props.changedInput1(e.target.value)} type="number" id="number1" />
          </label>
          <label htmlFor="number2">
            Número 2
            <input onChange={(e) => this.props.changedInput2(e.target.value)} type="number" id="number2" />
          </label>
          <label htmlFor="number3">
            Número 3
            <input onChange={(e) => this.props.changedInput3(e.target.value)} type="number" id="number3" />
          </label>
        </div>
        <div>
          <span>{this.props.count}</span>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changedInput1: (value) => dispatch(sumInput1(value)),
    changedInput2: (value) => dispatch(sumInput2(value)),
    changedInput3: (value) => dispatch(sumInput3(value)),
  }
}

const mapStateToProps = (state) => ({
  count: state.sumInputReducer 
})

export default connect(mapStateToProps, mapDispatchToProps)(Inputs);
