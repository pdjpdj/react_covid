import React, { useEffect, useReducer } from 'react';
import { fetchCountryTotal } from '../api/covid19Data';
import CountryTotals from '../components/CountryTotals';
import '../components/Totals.css'
import { countryInitialState, countryReducer } from '../reducers/country';

interface CountryTotalProps {
  slug: string;
}

const CountryTotal: React.FC<CountryTotalProps> = (props: CountryTotalProps) => {
  const [state, dispatch] = useReducer(countryReducer, countryInitialState);

  const {loading, totals, error} = state;

  const {slug} = props;

  useEffect(() => {
    if (slug !== '') {
      fetchCountryTotal(slug, dispatch);
    }
  }, [slug]);

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
        Selected Country = {slug}
      </div>
      <CountryTotals totals={totals}/>
    </div>
  );
};

export default CountryTotal;
