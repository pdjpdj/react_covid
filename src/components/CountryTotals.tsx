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
        <div >
          Latest ({formatMidDate(new Date(totals[totals.length - 1].Date))})
        </div>
        <div>
          Confirmed:
            {(
              totals[totals.length - 1].Confirmed -
              totals[totals.length - 2].Confirmed
            ).toLocaleString()}
        </div>
        <div>
          Deaths:
          {(
            totals[totals.length - 1].Deaths -
            totals[totals.length - 2].Deaths
          ).toLocaleString()}
        </div>
        <div>
          Recovered:
          {(
            totals[totals.length - 1].Recovered -
            totals[totals.length - 2].Recovered
          ).toLocaleString()}
        </div>
        <div>
          Active:
          {(
            totals[totals.length - 1].Active -
            totals[totals.length - 2].Active
          ).toLocaleString()}
        </div>
      </div>
      <div>
        <div>
          All time
        </div>
        <div>
          Confirmed:
          {totals[totals.length - 1].Confirmed.toLocaleString()}
        </div>
        <div>
          Deaths:
          {totals[totals.length - 1].Deaths.toLocaleString()}
        </div>
        <div>
          Recovered:
          {totals[totals.length - 1].Recovered.toLocaleString()}
        </div>
        <div>
          Active:
          {totals[totals.length - 1].Active.toLocaleString()}
        </div>
      </div>
    </div>
  );
}

export default CountryTotals;
