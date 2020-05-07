import React from 'react';
import DogImg from './DogImg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dogURL: '',
      name: '',
      isLoading: null,
      error: null,
      breed: '',
      arrDog: [],
    };
    this.apiDog = this.apiDog.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  apiDog() {
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

  componentDidMount() {
    if (localStorage.getItem('arrDog')) {
      const arrDog = JSON.parse(localStorage.getItem("arrDog"));
      this.setState({
        dogURL: arrDog[0].dogURL,
        name: arrDog[0].name,
      })
    } else {
      this.apiDog();
    }

  }

  componentDidUpdate(prevProps, prevState) {
    const { arrDog, breed } = this.state;
    if (arrDog.length > 0) localStorage.setItem('arrDog', JSON.stringify(arrDog));
    if (prevState.breed !== breed) return alert(`Raça: ${breed}`)
  }

  handleChange(event) {
    this.setState({ name: event.target.value, })
  }

  handleClick() {
    const { name, dogURL, arrDog } = this.state;
    this.setState({ 
      arrDog: [...arrDog, {name, dogURL}],
     })
  }

  render() {
    const { dogURL, isLoading, name } = this.state;
    return (
      <div>
        Troque o Doguinho
        <button
          onClick={this.apiDog}>
          Novo Doguinho
        </button><br></br>
        <span>{`Nome: ${name}`}</span>
        <DogImg dogURL={dogURL} isLoading={isLoading} loading="Loading..." />
        <label>
          Nome:
          <input type="text" onChange={this.handleChange} value={name} ></input>
        </label><br></br>
        <button type="button" onClick={this.handleClick}>Salvar</button>
      </div>
    );
  }
}

export default App;
