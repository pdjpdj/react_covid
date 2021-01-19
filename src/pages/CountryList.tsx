import React, { useEffect, useReducer, useState } from 'react';
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
  const [countryName, setCountryName] = useState('');

  const {loading, countries, error} = state;

  const {selected, selectCountry} = props;

  useEffect(() => {
    fetchCountries(dispatch);
  }, []);

  const handleInputChange = (event: any) => {
    setCountryName(event.target.value);
  }

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
      <div>
        <div className='table-row table-row-alt country-item'>
          <input
            type='text'
            value={countryName}
            placeholder='Enter country name to filter'
            onChange={handleInputChange}
            className='countries-input'/>
        </div>
        <div className='countries-list'>
        {countries?.filter(country => country.Country.toLowerCase().indexOf(countryName.toLowerCase()) > -1)
        .sort((a, b) => a.Country > b.Country ? 1 : -1)
        .map((country, index) => (
          <div 
            key={country.Slug} 
            className={`table-row ${index%2 ? 'table-row-alt' : ''} ${selected===country.Slug ? 'table-row-selected' : ''} country-item`}
            onClick={() => selectCountry(country.Slug)}>
              {country.Country}
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default CountryList;
