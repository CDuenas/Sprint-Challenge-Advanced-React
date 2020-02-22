import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "@testing-library/react";
import App from './App';
import PlayerData from './components/PlayerData';
import PlayerCard from './components/PlayerCard';
import useLocalStorage from './components/useLocalStorage';

test('renders without crashing', () => {
  render(<App />);
});

test("Displays name text", () => {
  const { queryByText } = render(<PlayerData />);

  const nameText = queryByText(/Name/i);
});

test("Displays country text", () => {
  const { queryByText } = render(<PlayerData />);

  const countryText = queryByText(/Country/i);
});

test("PlayerData has a class", () => {
  const { queryByTitle } = render(<PlayerData />)

  const appClass = queryByTitle(/App/i);
});

test("Placeholder set for input box", () => {
  const { queryByText } = render(<App />)

  const placeHolder = queryByText(/Enter your name/i)
})
