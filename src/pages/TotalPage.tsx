import React, { useEffect, useReducer } from 'react';
import { fetchTotal } from '../api/covid19Data';
import Totals from '../components/Totals';
import { totalInitialState, totalReducer } from '../reducers/total';

interface TotalPageProps {
}

const TotalPage: React.FC<TotalPageProps> = (props: TotalPageProps) => {
  const [state, dispatch] = useReducer(totalReducer, totalInitialState);

  const {loading, totals, error} = state;

  useEffect(() => {
    fetchTotal(dispatch);
  }, []);

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
    <div>
      <div>
        Global totals
      </div>
      <Totals totals={totals}/>
    </div>
  );
};

export default TotalPage;
