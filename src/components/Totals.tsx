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
        <div>
          Today
        </div>
        <div>
          Confirmed:
          {totals?.NewConfirmed.toLocaleString()}
        </div>
        <div>
          Deaths:
          {totals.NewDeaths.toLocaleString()}
        </div>
        <div>
          Recovered:
          {totals?.NewRecovered.toLocaleString()}
        </div>
      </div>
      <div>
        <div>
          All time
        </div>
        <div>
          Confirmed:
          {totals?.TotalConfirmed.toLocaleString()}
        </div>
        <div>
          Deaths:
          {totals.TotalDeaths.toLocaleString()}
        </div>
        <div>
          Recovered:
          {totals?.TotalRecovered.toLocaleString()}
        </div>
      </div>
    </div>
  );
}

export default Totals;
