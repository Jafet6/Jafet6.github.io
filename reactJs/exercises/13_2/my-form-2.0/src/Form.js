import React from 'react';
import estadosArr from './estadosArr'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      cpf: "",
      endereço: "",
      estado: "AC",
      moradia: "",
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  } 

  render() {
    console.log(this)
    return(
      <form>
        <div>
          <fieldset>
            <legend>Informações Pessoais</legend>
              <input value={this.state.name} onChange={this.handleChange} name="name" placeholder="Nome" type="text" required/>
              <input value={this.state.email} onChange={this.handleChange} name="email" placeholder="Email" type="email" required />
              <input value={this.state.cpf} onChange={this.handleChange} name="cpf" placeholder="CPF" type="text" required />
              <input value={this.state.endereço} onChange={this.handleChange} onBlur={this.cityName} name="endereço" placeholder="Endereço" type="text" required />
              <select onChange={this.handleChange} name="estado" required>
                {estadosArr.map(e => 
                <option key={e} value={e}>{e}</option>
                )}
              </select>
              <div onChange={this.handleChange} name="estado" required>
                <input name="moradia" value="Casa" type="radio" id="casa" /><label htmlFor="casa">Casa</label>
                <input name="moradia" value="Apartamento" type="radio" id="apto" /><label htmlFor="apto">Apartamento</label>
              </div>
          </fieldset>
        </div>
      </form>
    )
  }
}

export default Form;
