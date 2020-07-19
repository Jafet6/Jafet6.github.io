import React from 'react';
import redditContext from '../contexts/redditContext';
import apiRequest from '../service/apiRequest';


class Provider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      errorMessage: '',
      loading: false,
    }
    this.apiSearchRequest = this.apiSearchRequest.bind(this);
    this.apiRequestSucceed = this.apiRequestSucceed.bind(this);
    this.apiRequestFailure = this.apiRequestFailure.bind(this);
  };

  apiRequestSucceed({ data: { children } }) {
    console.log(children)
    this.setState({
      data: children,
      loading: false,
     })
  }

  apiRequestFailure(error) {
    this.setState({
      errorMessage: error,
      loading: false,
    })
  }

  apiSearchRequest(searchText) {
    const { loading } = this.state;

    this.setState({ loading: true })

    apiRequest(searchText)
      .then(this.apiRequestSucceed, this.apiRequestFailure)
  }

  render() {
    const contextObj = {
      ...this.state,
      apiSearchRequest: this.apiSearchRequest,
    }
    return (
      <redditContext.Provider value={contextObj}>
        {this.props.children}
      </redditContext.Provider>
    )
  }
}

export default Provider;
