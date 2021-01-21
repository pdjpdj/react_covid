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
          No global data
        </div>
      </div>
    );
  }

  return (
    <div>
      <table>
        <caption className='totals-subheader'>
          Today
        </caption>
        <tbody>
          <tr className='table-row'>
            <td className='table-row-label'>
              Confirmed:
            </td>
            <td className='table-row-data'>
              {totals?.NewConfirmed.toLocaleString()}
            </td>
          </tr>
          <tr className='table-row table-row-alt'>
            <td className='table-row-label'>
              Deaths:
            </td>
            <td className='table-row-data'>
              {totals.NewDeaths.toLocaleString()}
            </td>
          </tr>
          <tr className='table-row'>
            <td className='table-row-label'>
              Recovered:
            </td>
            <td className='table-row-data'>
              {totals?.NewRecovered.toLocaleString()}
            </td>
          </tr>
        </tbody>
      </table>
      <table>
        <caption className='totals-subheader'>
          All time
        </caption>
        <tbody>
          <tr className='table-row'>
            <td className='table-row-label'>
              Confirmed:
            </td>
            <td className='table-row-data'>
              {totals?.TotalConfirmed.toLocaleString()}
            </td>
          </tr>
          <tr className='table-row table-row-alt'>
            <td className='table-row-label'>
              Deaths:
            </td>
            <td className='table-row-data'>
              {totals.TotalDeaths.toLocaleString()}
            </td>
          </tr>
          <tr className='table-row'>
            <td className='table-row-label'>
              Recovered:
            </td>
            <td className='table-row-data'>
              {totals?.TotalRecovered.toLocaleString()}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Totals;
