import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import App from './App';

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');

  return ({
    ... originalModule,
    BrowserRouter: ({ children }) => (<div>{children}</div>),
  })
})

function renderWithRouter(
  ui,
  {route = '/', history = createMemoryHistory({initialEntries: [route]})} = {},
) {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history,
  }
}

describe('Testing all routes and all App', () => {
  test('renders Home Page', () => {
    const { getByText } = renderWithRouter(<App />);
    const name = getByText(/Jafet Henrique/i);
    expect(name).toBeInTheDocument();
  });

  test('navigating from home to projects', () => {
    const { getByText, history } = renderWithRouter(<App />);
    
    const name = getByText(/Jafet Henrique/i)
    expect(name).toBeInTheDocument();
    expect(history.location.pathname).toBe('/')

    const projectsLink = getByText(/Projects/i);
    expect(projectsLink).toBeInTheDocument()
    fireEvent.click(projectsLink)
    expect(history.location.pathname).toBe('/projects')

    const headingProjects = getByText(/Projetos/i)
    expect(headingProjects).toBeInTheDocument();
    expect(name).not.toBeInTheDocument();

  })

  test('navigating from home to about', () => {
    const { getByText, history } = renderWithRouter(<App />);

    const name = getByText(/Jafet Henrique/i)
    expect(name).toBeInTheDocument();
    expect(history.location.pathname).toBe('/')

    const aboutLink = getByText(/About/i)
    expect(aboutLink).toBeInTheDocument;
    fireEvent.click(aboutLink);
    expect(history.location.pathname).toBe('/about')

    const headingAbout = getByText(/Sobre/i);
    expect(headingAbout).toBeInTheDocument();
    expect(name).not.toBeInTheDocument();
  })

  test('navigating from home to contact', () => {
    const { getByText, history } = renderWithRouter(<App />)

    const name = getByText(/Jafet Henrique/i);
    expect(name).toBeInTheDocument();
    expect(history.location.pathname).toBe('/')

    const contactLink = getByText(/Contact/i);
    expect(contactLink).toBeInTheDocument();
    fireEvent.click(contactLink);
    expect(history.location.pathname).toBe('/contact');

    const headingContact = getByText(/Contatos/i);
    expect(headingContact).toBeInTheDocument();
    expect(name).not.toBeInTheDocument();
  })

})
