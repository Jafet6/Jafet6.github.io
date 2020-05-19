import React from 'react';

const verifyEmail = (email) => { //função teste e regex de e-mail
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
}

const ValidEmail = (props) => {
  const { email } = props;
  if (email) {
    return (
      <div>
        <h2 data-testid="id-email-user" >{`Valor: ${email}`}</h2>
        <h3>{(verifyEmail(email) ? 'Email Valido' : 'Email Inválido')}</h3>
      </div>
    )
  }
  return (
    <div>
      <h2 data-testid="id-email-user" >{`Valor: ${email}`}</h2>
    </div>
  )
}

export default ValidEmail;