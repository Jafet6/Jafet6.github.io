import React from "react";
import { fireEvent, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import renderWithRouter from "./renderWithRouter";
import App, { About } from "./App";

afterEach(cleanup);

describe ('testes do componente About', () => {
  it("deve renderizar o componente About (apenas componente)", () => {
    const { getByText, getByTestId } = renderWithRouter(<About />);
    const aboutOnly = getByText(/Você está na página Sobre/i);
    expect(aboutOnly).toBeInTheDocument();
    expect(getByTestId('input-nome')).toBeInTheDocument();
    expect(getByTestId('input-email')).toBeInTheDocument();

    const inputNome = getByTestId("input-nome");
    expect(inputNome.value).toBe("");
    fireEvent.change(inputNome, { target: { value: "Estudante da Trybe" } });
    expect(inputNome.value).toBe("Estudante da Trybe");

    const inputEmail = getByTestId("input-email");
    expect(inputEmail.value).toBe("");
    fireEvent.change(inputEmail, { target: { value: "estudante@trybe.com" } });
    expect(inputEmail.value).toBe("estudante@trybe.com");
  });
});

describe("teste da aplicação toda", () => {
  it("deve renderizar o componente App", () => {
    const { getByText } = renderWithRouter(<App />);
    const home = getByText(/Você está na página Início/i);
    expect(home).toBeInTheDocument();
  });
  
  it("deve testar um caminho não existente e a renderização do Not Found", () => {
    const { getByText, history } = renderWithRouter(<App />);
    history.push("/pagina/que-nao-existe/");
    const noMatch = getByText(/Página não encontrada/i);
    expect(noMatch).toBeInTheDocument();
  });

  it('deve renderizar o componente Sobre', () => {
    const { getByText, history } = renderWithRouter(<App />);
    fireEvent.click(getByText(/Sobre/i));
    const pathname = history.location.pathname;
    expect(pathname).toBe(`/about`);
    const aboutAll = getByText(/Você está na página Sobre/i);
    expect(aboutAll).toBeInTheDocument();
  });
});
