import { CountryReduxAction, CountryReduxState } from './CountryRedux';

const initialState: CountryReduxState = {
  countries: [],
};

const countryReducer = (state = initialState, action: CountryReduxAction) => {
  switch (action.type) {
    case 'FIND':
      return {
        ...state,
        countries: action.payload.countries,
      };
    default:
      return {
        ...state,
      };
  }
};

export default countryReducer;
