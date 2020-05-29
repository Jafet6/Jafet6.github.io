import React from 'react'
import { Provider } from 'react-redux'
import { render, cleanup, fireEvent } from '@testing-library/react';
import App from './App';
import { createStore, combineReducers } from 'redux';
import countReducer from './reducer/countReducer';

const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({ countReducer }), initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}


describe('Testing click counter', () => {
  afterEach(cleanup);
  test('Testing standard value for initial state', () => {
    const { getByRole, getByTestId } = renderWithRedux(<App />, { initialState: {countReducer: 0 }});

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
    const { getByRole, getByTestId } = renderWithRedux(<App />, { initialState: {countReducer: 10 }});

    const boardCount = getByTestId('board');

    const clickButton = getByRole('button');
    fireEvent.click(clickButton);
    fireEvent.click(clickButton);
    fireEvent.click(clickButton);
    expect(boardCount).toBeInTheDocument();
    expect(clickButton).toBeInTheDocument();
    expect(boardCount).toHaveTextContent(13);
  })
})
