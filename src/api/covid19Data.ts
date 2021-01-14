import React from 'react';
import {
  countriesActionCreators,
  CountriesAction,
  CountryItem,
  RapidCountryItem,
} from '../reducers/countries';
import {countryActionCreators, CountryAction} from '../reducers/country';
import {totalActionCreators, TotalAction} from '../reducers/total';

const API_BASE_URL = 'https://api.covid19api.com/';

const COUNTRIES_STORAGE_KEY = 'COUNTRIES_KEY';

export async function fetchTotal(dispatch: React.Dispatch<TotalAction>) {
  dispatch(totalActionCreators.loading());
  try {
    const today = new Date();
    const yesterday = new Date(today.getMilliseconds() - 1000 * 24 * 60 * 60);
    const response = await fetch(
      `${API_BASE_URL}world?from=${yesterday.toISOString()}&to=${today.toISOString()}`,
      {
        method: 'GET',
      },
    );
    const totals = await response.json();
    dispatch(totalActionCreators.success(totals[0]));
  } catch (e) {
    dispatch(totalActionCreators.failure());
  }
}

export async function fetchCountries(
  dispatch: React.Dispatch<CountriesAction>,
) {
  dispatch(countriesActionCreators.loading());
  try {
    let countries: CountryItem[] = [];
    let countriesString = localStorage.getItem(COUNTRIES_STORAGE_KEY);

    if (countriesString === null) {
      const response = await fetch(`${API_BASE_URL}countries`, {
        method: 'GET',
      });

      countries = await response.json();

      // the other API doesn't have the lon/lat
      const response2 = await fetch(
        'https://covid-19-data.p.rapidapi.com/help/countries',
        {
          method: 'GET',
          headers: {
            // key removed from rapid API:
            'x-rapidapi-key':
              '0162f178d6msh3be422d1bbc3758p1a2e2ejsn3cb228873be2',
            'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
          },
        },
      );

      const countries2: RapidCountryItem[] = await response2.json();
      countries.map((country) => {
        const rapidCountries: RapidCountryItem[] = countries2.filter(
          (value) => value.alpha2code === country.ISO2,
        );
        if (rapidCountries && rapidCountries.length > 0) {
          country.latitude = rapidCountries[0].latitude;
          country.longitude = rapidCountries[0].longitude;
        }
        return true;
      });

      localStorage.setItem(
        COUNTRIES_STORAGE_KEY,
        JSON.stringify(countries),
      );
    } else {
      console.log('Gonna Parse');
      countries = JSON.parse(countriesString);
      // localStorage.clear();
    }

    dispatch(countriesActionCreators.success(countries));
  } catch (e) {
    console.error(e);
    dispatch(countriesActionCreators.failure());
  }
}

export async function fetchCountryTotal(
  code: string,
  dispatch: React.Dispatch<CountryAction>,
) {
  dispatch(countryActionCreators.loading());
  try {
    const response = await fetch(
      `${API_BASE_URL}total/dayone/country/${code}`,
      {
        method: 'GET',
      },
    );
    const totals = await response.json();
    dispatch(countryActionCreators.success(totals));
  } catch (e) {
    dispatch(countryActionCreators.failure());
  }
}
