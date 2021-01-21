import React from 'react';
import { render, screen } from '@testing-library/react';
import CountryTotals from './CountryTotals';
import { CountryTotalItem } from '../reducers/country';

const mockTotals: CountryTotalItem[] = [
  {
    Country: 'United Kingdom',
    CountryCode: 'UK',
    Province: '',
    City: '',
    CityCode: '',
    Confirmed: 4500,
    Deaths: 123,
    Recovered: 340,
    Active: 4160,
    Date: Date().toString()
  },
  {
    Country: 'United Kingdom',
    CountryCode: 'UK',
    Province: '',
    City: '',
    CityCode: '',
    Confirmed: 9000,
    Deaths: 256,
    Recovered: 680,
    Active: 8320,
    Date: Date().toString()
  }
]

test('renders country totals with data matches snapshot', () => {
  const {container} = render(<CountryTotals totals={mockTotals} />);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders no data when no table data', () => {
  render(<CountryTotals totals={[]} />);
  const text = screen.getAllByText(/^No data for this country$/);
  expect(text.length).toEqual(1);
});

test('renders no data when no table undefined', () => {
  render(<CountryTotals totals={undefined} />);
  const text = screen.getAllByText(/^No data for this country$/);
  expect(text.length).toEqual(1);
});