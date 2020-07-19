import React from 'react';
import { connect } from 'react-redux';

function ApiSearchControl(props) {

  const { loading, dataPosts } = props;
  if(!loading && dataPosts)
    return (
      <div>
        <ul>
          {dataPosts.map((e, index) => (<li key={index}>{e.data.title}</li>))}
        </ul>
      </div>
    )
  if(loading) return <span>Loading...</span>
  return <span>Escolha o que deseja procurar</span>
}

const mapStateToProps = (state) => ({
  dataPosts: state.apiRedditReducer.data,
  loading: state.apiRedditReducer.loading,
});

export default connect(mapStateToProps)(ApiSearchControl);
