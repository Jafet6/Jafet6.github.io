import React from 'react';
import { connect } from 'react-redux';
import { getApiDataPosts } from '../actions/apiRedditActions';
import ApiSearchControl from './ApiSearchControl';

function HomePage (props) {
  const { searchDispatch } = props;
  return (
    <div>
      <button type="button" onClick={() => searchDispatch('reactjs')}>ReactJs</button>
      <button type="button" onClick={() => searchDispatch('frontend')}>FrontEnd</button>
      <ApiSearchControl />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  searchDispatch: (search) => dispatch(getApiDataPosts(search)),
});

export default connect(null, mapDispatchToProps)(HomePage);
