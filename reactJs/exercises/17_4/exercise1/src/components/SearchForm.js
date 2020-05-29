import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { fetchGotApi } from '../actions/apiRequestActions';
import './SearchForm.css';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      characterSearched: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitName = this.submitName.bind(this);
  }

handleChange(e) {
  this.setState({
    inputText: e.target.value,
    characterSearched: '',
  })
}

submitName(e) {
  e.preventDefault();
  const { inputText } = this.state;
  const { searchDispatch } = this.props;

  searchDispatch(inputText);
  this.setState({
    inputText: '',
    characterSearched: inputText,
  })

}

render() {
  const { inputText } = this.state;
  return (
    <div>
      <form>
        <h1>Type a character below:</h1>
        <input onChange={this.handleChange}
        placeholder="Enter Character"
        value={inputText}
        />
        <div className="buttonSection">
          <button onClick={this.submitName} className="submitButton" type="button" >Search!</button>
        </div>
      </form>
    </div>
  )
}
};

const mapDispatchToProps = (dispatch) => ({
  searchDispatch: (textTyped) => dispatch(fetchGotApi(textTyped)),
})


export default connect(null, mapDispatchToProps)(SearchForm);

//faça as proptypes da ação oriunda do thunk

