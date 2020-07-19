import React from 'react';
import redditContext from '../contexts/redditContext';
// import { connect } from 'react-redux';

function ApiSearchControl(props) {

  // const { loading, dataPosts } = props;
  return (
    <redditContext.Consumer>
      {(context) => {
        if (!context.loading && context.data) 
          return (
            <div>
              <ul>
                {context.data.map((e, index) => (<li key={index}>{e.data.title}</li>))}
              </ul>
            </div>
          )
        if (context.loading) return <span>Loading...</span>
        return <span>Escolha o que deseja procurar</span>
      }}
    </redditContext.Consumer>
  )
}

// const mapStateToProps = (state) => ({
//   dataPosts: state.apiRedditReducer.data,
//   loading: state.apiRedditReducer.loading,
// });

export default ApiSearchControl;
