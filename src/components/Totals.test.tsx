import React from 'react';
import { render, screen } from '@testing-library/react';
import Totals from './Totals';
import { TotalItem } from '../reducers/total';

const mockTotal: TotalItem = 
  {
    NewConfirmed: 4500,
    NewDeaths: 123,
    NewRecovered: 340,
    TotalConfirmed: 4500,
    TotalDeaths: 123,
    TotalRecovered: 340,
  };

test('renders country totals with data matches snapshot', () => {
  const {container} = render(<Totals totals={mockTotal} />);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders no data when no table undefined', () => {
  render(<Totals totals={undefined} />);
  const text = screen.getAllByText(/^No global data$/);
  expect(text.length).toEqual(1);
});