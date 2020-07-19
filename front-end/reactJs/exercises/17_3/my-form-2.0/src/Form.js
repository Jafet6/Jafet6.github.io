import React from 'react';
import { connect } from 'react-redux';
import allAction from './actions/formAction';
import formReducer from './reducers/formReducer';

const estadosArr = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES',
  'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ',
  'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO',
];

const Form = (props) => {
  console.log(props);

  function inputCreator(testId, htmlForID, title, type, name, value) {
    return (
      <div className="buyers-info-input">
        <label htmlFor={htmlForID}>
          <input
            data-testid={testId}
            type={type}
            id={htmlForID}
            name={name}
            onChange={(e) => props.onChange(htmlForID, e.target.value)}
            placeholder={title}
            value={value}
          />
        </label>
      </div>
    );
  }

  function inputCreatorStates() {
    return (
      <select name="state" onChange={(e) => props.onChange('state', e.target.value)}>
        {estadosArr.map((e) => (
          <option key={e}>{e}</option>
        ))}
      </select>
    );
  }

    return (
      <div className="personal-data-form-container">
        <h3>Informações do Comprador</h3>
        <form className="personal-data-form">
          {inputCreator('checkout-fullname', 'name', 'Nome completo', 'text', 'name')}
          {inputCreator('checkout-email', 'email', 'E-mail', 'email', 'email')}
          {inputCreator('checkout-cpf', 'cpf', 'CPF', 'text', 'cpf')}
          {inputCreator('checkout-phone', 'phone', 'Telefone', 'text', 'phone')}
          {inputCreator('checkout-cep', 'cep', 'CEP', 'text', 'cep')}
          {inputCreator('checkout-address', 'address', 'Endereço', 'text', 'address')}
          {inputCreator('checkout-comp', 'compl', 'Complemento', 'text', 'compl')}
          {inputCreator('checkout-adNumb', 'adNumb', 'Número', 'text', 'addressNum')}
          {inputCreator('checkout-city', 'city', 'Cidade', 'text', 'city')}
          {inputCreatorStates()}
        </form>
      </div>
    );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (type, value) => dispatch(allAction(type, value)),
  }
};

const mapStateToProps = (state) => {
  return {
    input: state.formReducer,
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
