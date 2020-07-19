import React from 'react';
import { render, fireEvent, cleanup, queryByLabelText } from '@testing-library/react';
import App from '../App';

afterEach(cleanup);

describe('Teste da aplicação, testando o botão e sua funcionalidade', () => {
  test('Verificando se o botão está na tela e se o ele contém o texto "Adicionar"', () => {
    const { getByText } = render(<App />);
    const btnExist = getByText('Adicionar')
    expect(btnExist).toBeInTheDocument()

  });

  test(`Ao clicar no botão, é necessário adicionar o que o usuário digitou à lista`, () => {
    const {getByLabelText,queryByText} = render(<App />);
    const input = getByLabelText('Tarefa:');
    fireEvent.change(input, { target: { value: 'ReactJs' } });
    // console.log(input)
    fireEvent.click(queryByText('Adicionar'));
    const listing = queryByText('ReactJs');
    expect(listing).toBeInTheDocument();
    const listing1 = queryByText('Js')
    expect(listing1).not.toBeInTheDocument()

  });
});
