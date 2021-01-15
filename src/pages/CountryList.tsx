import React, { useEffect, useReducer } from 'react';
import { fetchCountries } from '../api/covid19Data';
import '../components/Totals.css'
import '../components/Countries.css'
import { countriesInitialState, countriesReducer } from '../reducers/countries';

interface CountryListProps {
  selected: string;
  selectCountry: (slug: string) => void;
}

const CountryList: React.FC<CountryListProps> = (props: CountryListProps) => {
  const [state, dispatch] = useReducer(countriesReducer, countriesInitialState);

  const {loading, countries, error} = state;

  const {selected, selectCountry} = props;

  useEffect(() => {
    fetchCountries(dispatch);
  }, []);

  if (loading) {
    return (
      <div>
        loading
      </div>
    );
  }

  if (error) {
    return (
      <div>
        There's been an error!
      </div>
    );
  }

  return (
    <div className='totals-table'>
      <div className='totals-header'>
        Countries
      </div>
      <div className='countries-list'>
        {countries?.sort((a, b) => a.Country > b.Country ? 1 : -1)
        .map((country, index) => (
          <div 
            key={country.Slug} 
            className={`table-row ${index%2 ? 'table-row-alt' : ''} ${selected===country.Slug ? 'table-row-selected' : ''}`}
            onClick={() => selectCountry(country.Slug)}>
              {country.Country}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryList;
