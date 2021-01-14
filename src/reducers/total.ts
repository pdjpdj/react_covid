export interface TotalItem {
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
}

interface TotalState {
  loading: boolean;
  error: boolean;
  totals: TotalItem | undefined;
}

export interface TotalAction {
  type: string;
  payload?: TotalItem;
}

const totalActionTypes = {
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
};

export const totalActionCreators = {
  loading: () => ({type: totalActionTypes.LOADING}),
  failure: () => ({type: totalActionTypes.FAILURE}),
  success: (payload: TotalItem) => ({type: totalActionTypes.SUCCESS, payload}),
};

export const totalInitialState: TotalState = {
  loading: true,
  error: false,
  totals: undefined,
};

export function totalReducer(
  state: TotalState,
  action: TotalAction,
): TotalState {
  switch (action.type) {
    case totalActionTypes.LOADING:
      return {...state, loading: true, error: false};
    case totalActionTypes.FAILURE:
      return {...state, loading: false, error: true};
    case totalActionTypes.SUCCESS:
      return {...state, loading: false, error: false, totals: action.payload};
    default:
      return state;
  }
}
