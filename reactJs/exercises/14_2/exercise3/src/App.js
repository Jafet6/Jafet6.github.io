import React from 'react';
import DogImg from './DogImg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dogURL: '',
      isLoading: null,
      error: null,
      breed: '',
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: true }, () => {
      fetch('https://dog.ceo/api/breeds/image/random')
        .then((resp) => resp.json())
        .then(
          (results) => {
            this.setState({
              dogURL: results.message,
              isLoading: false,
              breed: results.message.split('/')[4],
            })
          },
          (error) => {
            this.setState({
              isLoading: true,
              error 
            })
          }
        )

    })
  }

  componentDidUpdate(prevProps, prevState) {
    localStorage.setItem('lastUrl', prevState.dogURL)
    if (prevState.breed !== this.state.breed) return alert(`Raça: ${this.state.breed}`)
  }

  render() {
    const { dogURL, isLoading } = this.state;
    return (
      <div>
        Troque o Doguinho
        <button
          onClick={this.componentDidMount}>
          Novo Doguinho
        </button>
        <DogImg dogURL={dogURL} isLoading={isLoading} loading="Loading..." />
      </div>
    );
  }
}

export default App;
