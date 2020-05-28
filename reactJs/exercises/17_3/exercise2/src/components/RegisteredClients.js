import React from 'react';
import { connect } from 'react-redux';

const RegisteredClients = (props) => {
  console.log(props)
  const { clientsList, loged } = props;
  if(loged) {
    return (
      <div>
        <h2>Clientes cadastrados</h2>
        <ul>
          {clientsList.map((client) => 
            (<li key={client.email}>{`Nome: ${client.name} Idade: ${client.age}`}</li>))
          }
        </ul>
      </div>
    )
  }
  return (
    <h2>Login não efetuado</h2>
  )
}

const mapStateToProps = (state) => ({
  clientsList: state.registerReducer.users,
  loged: state.loginReducer.loged,
})

export default connect(mapStateToProps)(RegisteredClients);
