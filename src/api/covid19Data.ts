import React from 'react';
import {
  countriesActionCreators,
  CountriesAction,
  CountryItem,
} from '../reducers/countries';
import {countryActionCreators, CountryAction} from '../reducers/country';
import {totalActionCreators, TotalAction} from '../reducers/total';

const API_BASE_URL = 'https://api.covid19api.com/';

const COUNTRIES_STORAGE_KEY = 'COUNTRIES_KEY';

export async function fetchTotal(dispatch: React.Dispatch<TotalAction>) {
  dispatch(totalActionCreators.loading());
  try {
    const response = await fetch(
      `${API_BASE_URL}summary`,
      {
        method: 'GET',
      },
    );
    const totals = await response.json();
    dispatch(totalActionCreators.success(totals.Global));
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
