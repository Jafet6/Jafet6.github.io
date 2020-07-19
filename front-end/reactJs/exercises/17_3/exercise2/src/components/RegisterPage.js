import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerAction } from '../actions/registerAction';


class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      age: '',
      email: '',
      password: '',
    }
  }

  onChangeState = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  createInput = (name, type, placeHolder) => {
    return (
      <input
        name={name}
        type={type}
        placeholder={placeHolder}
        onChange={this.onChangeState}
      />
    )
  }

  render() {
    const { register } = this.props;
    return (
      <div>
        <h1>Cadastrar</h1>
        <form>
          {this.createInput("name", "text", "nome")}
          {this.createInput("age", "text", "idade")}
          {this.createInput("email", "email", "email")}
          {this.createInput("password", "text", "senha")}
        </form>
        <button
          onClick={() => register(this.state)}
        >
          Cadastrar
      </button>
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (state) => dispatch(registerAction(state))
  }
};

export default connect(null, mapDispatchToProps)(Register);
