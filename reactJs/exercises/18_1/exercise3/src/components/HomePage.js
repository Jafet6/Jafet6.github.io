import React from 'react';
// import { connect } from 'react-redux';
// import { getApiDataPosts } from '../actions/apiRedditActions';
import ApiSearchControl from './ApiSearchControl';
import redditContext from '../contexts/redditContext';

function HomePage () {
  return (
    <redditContext.Consumer>
      {(context) => (
        <div>
          <button type="button" onClick={() => context.apiSearchRequest('reactjs')}>ReactJs</button>
          <button type="button" onClick={() => context.apiSearchRequest('frontend')}>FrontEnd</button>
          <ApiSearchControl />
        </div>
      )}
    </redditContext.Consumer>
  )
}

// const mapDispatchToProps = (dispatch) => ({
//   searchDispatch: (search) => dispatch(getApiDataPosts(search)),
// });

export default HomePage;
