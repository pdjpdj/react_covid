import React from 'react';
import {CountryTotalItem} from '../reducers/country';
import {formatMidDate} from '../utils/dateFormatter';

interface CountryTotalsProps {
  totals: CountryTotalItem[] | undefined;
}

function CountryTotals({totals}: CountryTotalsProps) {
  if (!totals || totals.length === 0) {
    return (
      <div>
        <div>
          No data for this country
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>
        <div className='totals-subheader'>
          Latest ({formatMidDate(new Date(totals[totals.length - 1].Date))})
        </div>
        <div className='table-row'>
          <div className='table-row-label'>
            Confirmed:
          </div>
          <div className='table-row-data'>
            {(
              totals[totals.length - 1].Confirmed -
              totals[totals.length - 2].Confirmed
            ).toLocaleString()}
          </div>
        </div>
        <div className='table-row table-row-alt'>
          <div className='table-row-label'>
            Deaths:
          </div>
          <div className='table-row-data'>
            {(
              totals[totals.length - 1].Deaths -
              totals[totals.length - 2].Deaths
            ).toLocaleString()}
          </div>
        </div>
        <div className='table-row'>
          <div className='table-row-label'>
            Recovered:
          </div>
          <div className='table-row-data'>
            {(
              totals[totals.length - 1].Recovered -
              totals[totals.length - 2].Recovered
            ).toLocaleString()}
          </div>
        </div>
      </div>
      <div>
        <div className='totals-subheader'>
          All time
        </div>
        <div className='table-row'>
          <div className='table-row-label'>
            Confirmed:
          </div>
          <div className='table-row-data'>
            {totals[totals.length - 1].Confirmed.toLocaleString()}
          </div>
        </div>
        <div className='table-row table-row-alt'>
          <div className='table-row-label'>
            Deaths:
          </div>
          <div className='table-row-data'>
            {totals[totals.length - 1].Deaths.toLocaleString()}
          </div>
        </div>
        <div className='table-row'>
          <div className='table-row-label'>
            Recovered:
          </div>
          <div className='table-row-data'>
            {totals[totals.length - 1].Recovered.toLocaleString()}
          </div>
        </div>
        <div className='table-row table-row-alt'>
          <div className='table-row-label'>
            Active:
          </div>
          <div className='table-row-data'>
            {totals[totals.length - 1].Active.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryTotals;
