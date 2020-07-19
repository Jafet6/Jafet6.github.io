import React, { useContext } from 'react';
import ApiSearchControl from './ApiSearchControl';
import redditContext from '../contexts/redditContext';

function HomePage () {
  const { apiSearchRequest } = useContext(redditContext)
  return (
    <div>
      <button type="button" onClick={() => apiSearchRequest('reactjs')}>ReactJs</button>
      <button type="button" onClick={() => apiSearchRequest('frontend')}>FrontEnd</button>
      <ApiSearchControl />
    </div>
  )
}

export default HomePage;
