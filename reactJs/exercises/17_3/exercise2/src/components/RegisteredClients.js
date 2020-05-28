import React from 'react';
import { connect } from 'react-redux';

class RegisteredClients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrClients: this.props.clientsList,
      sorted: false,
    }
  }

  sortNames = () => {
    const { sorted } = this.state;
    const copiedArr = [...this.props.clientsList]
    const newOrderedList = copiedArr.sort((a, b) =>(a.name > b.name) ? 1 : -1);
    if(!sorted) {
      return this.setState({ arrClients: newOrderedList, sorted: true, });
    }
    return this.setState({ arrClients: this.props.clientsList, sorted: false})
  }

  render() {
    const { loged } = this.props;
    const { arrClients } = this.state;
    if(loged) {
      return (
        <div>
          <h2>Clientes cadastrados</h2>
          <ul>
            {arrClients.map((client, index) => 
              (<li key={index}>{`Nome: ${client.name} Idade: ${client.age}`}</li>))
            }
          </ul>
          <button onClick={this.sortNames} type="button">Ordenar Nomes</button>
        </div>
      )
    }
    return (
      <h2>Login não efetuado</h2>
    )
  }
  
}

const mapStateToProps = (state) => ({
  clientsList: state.registerReducer.users,
  loged: state.loginReducer.loged,
})

export default connect(mapStateToProps)(RegisteredClients);
