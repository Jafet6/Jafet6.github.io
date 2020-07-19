import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from '../App';
import Item from '../Item';

afterEach(cleanup);

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água']; // Use esse array como base para realizar os testes.
    let item = 'Realizar CR';
    const { getByText } = render(<Item content={item} />)
    item = 'Ler Post no Medium';
    const {  } = render(<Item content={item} />) // Caso precise de uma nova query adicione no object destructuring
    item = 'Beber água';
    const {  } = render(<Item content={item} />)
    const exists = getByText('Realizar CR');
    const exists1 = getByText('Ler Post no Medium');
    const exists2 = getByText('Beber água');
    expect(exists).toBeInTheDocument()
    expect(exists1).toBeInTheDocument();
    expect(exists2).toBeInTheDocument();
  })
});
