import React from 'react';
import { connect } from 'react-redux';
import { getApiDataPosts } from '../actions/apiRedditActions';


function HomePage (props) {
  const { dataPosts, searchDispatch } = props;
  return (
    <div>
      <button type="button" onClick={() => searchDispatch('reactjs')}>ReactJs</button>
      <button type="button" onClick={() => searchDispatch('frontend')}>FrontEnd</button>
      {/* <ul>
        {dataPosts.map((e, index) = (<li key={index}>{e.title}</li>))}
      </ul> */}
    </div>
  )
}

const mapStateToProps = (state) => ({
  dataPosts: state.apiRedditReducer.data,
});

const mapDispatchToProps = (dispatch) => ({
  searchDispatch: (search) => dispatch(getApiDataPosts(search)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
