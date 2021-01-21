export interface CountryTotalItem {
  Country: string;
  CountryCode: string;
  Province: string;
  City: string;
  CityCode: string;
  Confirmed: number;
  Deaths: number;
  Recovered: number;
  Active: number;
  Date: string;
}

interface CountryState {
  loading: boolean;
  error: boolean;
  totals: CountryTotalItem[] | undefined;
}

export interface CountryAction {
  type: string;
  payload?: CountryTotalItem[];
}

const countryActionTypes = {
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
};

export const countryActionCreators = {
  loading: () => ({type: countryActionTypes.LOADING}),
  failure: () => ({type: countryActionTypes.FAILURE}),
  success: (payload: CountryTotalItem[]) => ({
    type: countryActionTypes.SUCCESS,
    payload,
  }),
};

export const countryInitialState: CountryState = {
  loading: true,
  error: false,
  totals: [],
};

export function countryReducer(
  state: CountryState,
  action: CountryAction,
): CountryState {
  switch (action.type) {
    case countryActionTypes.LOADING:
      return {...state, loading: true, error: false};
    case countryActionTypes.FAILURE:
      return {...state, loading: false, error: true};
    case countryActionTypes.SUCCESS:
      return {...state, loading: false, error: false, totals: action.payload};
    default:
      return state;
  }
}
