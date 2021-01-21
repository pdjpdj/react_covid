import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app when loading', () => {
  render(<App />);
  const loadingElement = screen.getAllByText(/loading/);
  expect(loadingElement.length).toEqual(2);
});
