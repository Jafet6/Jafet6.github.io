import React from 'react';
import { connect } from 'react-redux';
import { loginAction } from '../actions/loginAction';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }

  onChangeState = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    })
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

  loginVerification = (typedEmail, typePassword) => {
    const { history, clientsList, loginControl } = this.props
    if (clientsList.find(({ email, password }) => email === typedEmail && password === typePassword)) {
      loginControl();
      return history.push("/registered-clients");
    }
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <h2>Login e senha</h2>
        {this.createInput("email", "email", "email")}
        {this.createInput("password", "text", "senha")}
        <button
          onClick={() => this.loginVerification(email, password)}
        >
          Logar
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  clientsList: state.registerReducer.users,
})

const mapDispatchToProps = (dispatch) => ({
  loginControl: () => dispatch(loginAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
