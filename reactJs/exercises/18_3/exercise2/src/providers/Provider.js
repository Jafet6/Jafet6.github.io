import React from 'react';
import redditContext from '../contexts/redditContext';
import apiRequest from '../service/apiRequest';
import { useState } from 'react';


const Provider = ({ children }) => {

  const [data, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const apiRequestSucceed = ({ data: { children } }) => {
    setData(children);
    setLoading(false);
  }

  const apiRequestFailure = (error) => {
    setErrorMessage(error);
    setLoading(false);
  }

  const apiSearchRequest = (searchText) => {
    setLoading(true)
    apiRequest(searchText)
      .then(apiRequestSucceed, apiRequestFailure)
  }

  const contextObj = {
    data,
    errorMessage,
    loading,
    apiSearchRequest,
  }
  return (
    <redditContext.Provider value={contextObj}>
      {children}
    </redditContext.Provider>
  )
}

export default Provider;
