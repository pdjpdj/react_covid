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
      <table>
        <caption className='totals-subheader'>
          Latest ({formatMidDate(new Date(totals[totals.length - 1].Date))})
        </caption>
        <tbody>
          <tr className='table-row'>
            <td className='table-row-label'>
              Confirmed:
            </td>
            <td className='table-row-data'>
              {(
                totals[totals.length - 1].Confirmed -
                totals[totals.length - 2].Confirmed
              ).toLocaleString()}
            </td>
          </tr>
          <tr className='table-row table-row-alt'>
            <td className='table-row-label'>
              Deaths:
            </td>
            <td className='table-row-data'>
              {(
                totals[totals.length - 1].Deaths -
                totals[totals.length - 2].Deaths
              ).toLocaleString()}
            </td>
          </tr>
          <tr className='table-row'>
            <td className='table-row-label'>
              Recovered:
            </td>
            <td className='table-row-data'>
              {(
                totals[totals.length - 1].Recovered -
                totals[totals.length - 2].Recovered
              ).toLocaleString()}
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
              {totals[totals.length - 1].Confirmed.toLocaleString()}
            </td>
          </tr>
          <tr className='table-row table-row-alt'>
            <td className='table-row-label'>
              Deaths:
            </td>
            <td className='table-row-data'>
              {totals[totals.length - 1].Deaths.toLocaleString()}
            </td>
          </tr>
          <tr className='table-row'>
            <td className='table-row-label'>
              Recovered:
            </td>
            <td className='table-row-data'>
              {totals[totals.length - 1].Recovered.toLocaleString()}
            </td>
          </tr>
          <tr className='table-row table-row-alt'>
            <td className='table-row-label'>
              Active:
            </td>
            <td className='table-row-data'>
              {totals[totals.length - 1].Active.toLocaleString()}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryTotals;
