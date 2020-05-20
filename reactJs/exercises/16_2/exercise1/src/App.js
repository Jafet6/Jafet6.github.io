import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

export class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      email: "",
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput (e) {
    const { name, value } = e.target;
    console.log(name, value);
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <div>Você está na página Sobre</div>
        <p>
          Nome: 
          <input 
            onChange={(e) => this.handleInput(e)}
            name='nome'
            data-testid='input-nome'
            value={this.state.nome}
          />
        </p>
        <p>
          E-mail: 
          <input 
            onChange={(e) => this.handleInput(e)}
            name='email'
            data-testid='input-email'
            value={this.state.email}
          />
        </p>
      </div>
    );
  }
}
export const Home = () => <div>Você está na página Início</div>;
export const NoMatch = () => <div>Página não encontrada</div>;

export default function App() {
  return (
    <div>
      <Link to="/">Início</Link>
      <Link to="/about">Sobre</Link>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  );
};
