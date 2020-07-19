import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup); // limpa o Dom após o teste

describe('Exercícios de teste', () => {
  test('Verificando se existe o campo Email.', () => {
    const { getByLabelText } = render(<App />);
    const inputEmail = getByLabelText("Email");
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail.type).toBe("email");
  });
  
  test('Verificando se existe um botão de enviar', () => {
    const { getByTestId } = render(<App />);
    const btn = getByTestId('id-send');
    expect(btn).toBeInTheDocument();
    expect(btn.type).toBe('button');
    expect(btn.value).toBe('Enviar');
  });
  
  test('Verificando se existe dois botões', () => {
    const { getAllByRole } = render(<App />);
    const btn = getAllByRole('button');
    expect(btn.length).toBe(2);
  });
  
  test('Verificando se o botão e o campo email estão funcionando.', () => {
    const { getByTestId, getByLabelText } = render(<App />);
  
    const EMAIL_USER = 'email@email.com';
  
    const textEmail = getByTestId('id-email-user');
    expect(textEmail).toBeInTheDocument();
    expect(textEmail.textContent).toBe('Valor: ');
  
    const btnSend = getByTestId('id-send');
    const inputEmail = getByLabelText("Email");
    fireEvent.change(inputEmail, { target: { value: EMAIL_USER } }); // Adiiona o e-mail ao event.target.value
    fireEvent.click(btnSend);
    expect(inputEmail.value).toBe('');
    expect(textEmail.textContent).toBe(`Valor: ${EMAIL_USER}`);
  });
})
