import React from 'react';
import {TotalItem} from '../reducers/total';

interface TotalsProps {
  totals: TotalItem | undefined;
}

function Totals({totals}: TotalsProps) {
  if (!totals) {
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
          Today
        </div>
        <div className='table-row'>
          <div className='table-row-label'>
            Confirmed:
          </div>
          <div className='table-row-data'>
            {totals?.NewConfirmed.toLocaleString()}
          </div>
        </div>
        <div className='table-row table-row-alt'>
          <div className='table-row-label'>
            Deaths:
          </div>
          <div className='table-row-data'>
            {totals.NewDeaths.toLocaleString()}
          </div>
        </div>
        <div className='table-row'>
          <div className='table-row-label'>
            Recovered:
          </div>
          <div className='table-row-data'>
            {totals?.NewRecovered.toLocaleString()}
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
            {totals?.TotalConfirmed.toLocaleString()}
          </div>
        </div>
        <div className='table-row table-row-alt'>
          <div className='table-row-label'>
            Deaths:
          </div>
          <div className='table-row-data'>
            {totals.TotalDeaths.toLocaleString()}
          </div>
        </div>
        <div className='table-row'>
          <div className='table-row-label'>
            Recovered:
          </div>
          <div className='table-row-data'>
            {totals?.TotalRecovered.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Totals;
