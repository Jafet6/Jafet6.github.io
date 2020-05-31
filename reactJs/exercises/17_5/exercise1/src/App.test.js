import React from 'react'
import { Provider } from 'react-redux'
import { render, cleanup, fireEvent } from '@testing-library/react';
import App from './App';
import { createStore, combineReducers } from 'redux';
import countReducer from './reducer/countReducer';
import sumInputReducer from './reducer/sumInputReducer'

const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers(
    { countReducer, sumInputReducer }), initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}


describe('Testing click counter', () => {
  afterEach(cleanup);
  test('Testing standard value for initial state', () => {
    const { getByRole, getByTestId } = renderWithRedux(
      <App />, { initialState: { countReducer: 10, sumInputReducer: 0 }}
    );

    const boardCount = getByTestId('board');

    const clickButton = getByRole('button');
    fireEvent.click(clickButton);
    fireEvent.click(clickButton);
    fireEvent.click(clickButton);
    expect(boardCount).toBeInTheDocument();
    expect(clickButton).toBeInTheDocument();
    expect(boardCount).toHaveTextContent(3);
  })

  test('Testing standard value for initial state', () => {
    const { getByRole, getByTestId } = renderWithRedux(
      <App />, { initialState: { countReducer: 10, sumInputReducer: 0 }}
    );

    const boardCount = getByTestId('board');

    const clickButton = getByRole('button');
    fireEvent.click(clickButton);
    fireEvent.click(clickButton);
    fireEvent.click(clickButton);
    expect(boardCount).toBeInTheDocument();
    expect(clickButton).toBeInTheDocument();
    expect(boardCount).toHaveTextContent(13);
  })

  test('Testing sum inputs', () => {
    const { getByTestId, getByText } = renderWithRedux(
      <App />, { initialState: { countReducer: 10, sumInputReducer: 0 }}
    );

    const input1 = getByTestId('input1');
    expect(input1).toBeInTheDocument();
    fireEvent.change(input1, { target: { value: 2 } });

    const input2 = getByTestId('input2');
    expect(input2).toBeInTheDocument();
    fireEvent.change(input1, { target: { value: 3 } });

    const input3 = getByTestId('input3');
    expect(input3).toBeInTheDocument();
    fireEvent.change(input1, { target: { value: 5 } });

    expect(getByText('Contador: 10')).toBeInTheDocument();
  })

})
