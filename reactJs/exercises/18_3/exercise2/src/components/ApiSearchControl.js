import React, { useContext } from 'react';
import redditContext from '../contexts/redditContext';

function ApiSearchControl(props) {
  const { loading, data } = useContext(redditContext)
  // const { loading, dataPosts } = props;
    
  if (!loading && data) 
    return (
      <div>
        <ul>
          {data.map((e, index) => (<li key={index}>{e.data.title}</li>))}
        </ul>
      </div>
    )
  if (loading) return <span>Loading...</span>
  return <span>Escolha o que deseja procurar</span>
}

export default ApiSearchControl;
