import React from 'react';
import estadosArr from './estadosArr'

const initialState = {
  name: "",
  email: "",
  cpf: "",
  cidade: "",
  endereço: "",
  estado: "AC",
  moradia: "",
  curriculo: "",
  cargo: "",
  descriCargo: "",
  render: [],
  formErrors: {
    email: "",
  }
}

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = initialState;

    this.handleChange = this.handleChange.bind(this);
    this.alert = this.alert.bind(this);
    this.cityName = this.cityName.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClearClick = this.handleClearClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  } 

  handleChangeName(event) {
  this.setState({ name: event.target.value.toUpperCase() })
  }

  handleChangeEmail(event) {
    const { name, value } = event.target;
    this.setState((state) => ({
      [name]: value,
      formErrors: {
        ...state.formErrors,
        [name]: this.validateField(value),
      },
    }));
  }

  validateField(value) {
    const isValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
    return isValid ? '' : 'is invalid';
  }

  handleClick() {
    const kkk = this.state;
    this.setState((state) => ({
      // ...state.render,
      render: Object.values(kkk).slice(0, -2)
    }))
    console.log(Object.values(this.state).slice(0, -2))
  }

  creatingDiv() {
    const { render } = this.state;
    return (
      <div>
        {render.map((e, index) => (
          <div key={index}>{e}</div>
        ))}
      </div>
    )
  }

  handleClearClick() {
    this.setState(initialState)
  }

  alert() {
    alert('Preencha com cuidado esta informação.')
  };

  cityName() {
    const { cidade } = this.state;
    const firstLetter = cidade.split('')[0]
    if(firstLetter <='9' && firstLetter >='0'){
      this.setState({ cidade: "" })
    }
  }

  render() {
    const { name, email, cpf, endereço, curriculo, cargo, descriCargo, cidade } = this.state;
    return(
      <div>
        <form>
          <div>
            <fieldset>
              <legend>Informações Pessoais</legend>
                <input value={name} onChange={this.handleChangeName} name="name" placeholder="Nome" type="text" required/>
                <input value={email} onChange={this.handleChangeEmail} name="email" placeholder="Email" type="email" required />
                <input value={cpf} onChange={this.handleChange} name="cpf" placeholder="CPF" type="text" required />
                <input value={endereço} onChange={this.handleChange} name="endereço" placeholder="Endereço" type="text" required />
                <input value={cidade} onChange={this.handleChange} name="cidade" onBlur={this.cityName} placeholder="Cidade" type="text" required/>
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
          <div>
            <fieldset>
              <legend>Currículo</legend>
              <label>
                Resumo currículo
                <textarea name="curriculo" value={curriculo} onChange={this.handleChange}></textarea>
              </label>
              <label>
                Cargo
                <textarea name="cargo" value={cargo} onMouseEnter={this.alert} onChange={this.handleChange}></textarea>
              </label>
              <label>
                Descrição cargo
                <textarea name="descriCargo" value={descriCargo} onChange={this.handleChange}></textarea>
              </label>
            </fieldset>
          </div>
          <button type="button" onClick={this.handleClearClick}>Limpar Consolidado</button>
          <button type="button" value="Consolidar Currículo" onClick={this.handleClick}>Consolidar Currículo</button>
        </form>
        {this.creatingDiv()}
    </div>
    )
  }
}

export default Form;
