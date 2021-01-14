export interface CountryItem {
  Country: string;
  Slug: string;
  ISO2: string;
  latitude: number;
  longitude: number;
}

export interface RapidCountryItem {
  Name: string;
  alpha2code: string;
  alpha3code: string;
  latitude: number;
  longitude: number;
}

interface CountriesState {
  loading: boolean;
  error: boolean;
  countries: CountryItem[] | undefined;
}

export interface CountriesAction {
  type: string;
  payload?: CountryItem[];
}

const countriesActionTypes = {
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
};

export const countriesActionCreators = {
  loading: () => ({type: countriesActionTypes.LOADING}),
  failure: () => ({type: countriesActionTypes.FAILURE}),
  success: (payload: CountryItem[]) => ({
    type: countriesActionTypes.SUCCESS,
    payload,
  }),
};

export const countriesInitialState: CountriesState = {
  loading: true,
  error: false,
  countries: undefined,
};

export function countriesReducer(
  state: CountriesState,
  action: CountriesAction,
): CountriesState {
  switch (action.type) {
    case countriesActionTypes.LOADING:
      return {...state, loading: true, error: false};
    case countriesActionTypes.FAILURE:
      return {...state, loading: false, error: true};
    case countriesActionTypes.SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        countries: action.payload,
      };
    default:
      return state;
  }
}
