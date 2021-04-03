import { createStore, combineReducers } from 'redux';

import countryReducer from './core/infrastructure/StateManagers/Redux/CountryReducer';

export default createStore(
  combineReducers({
    country: countryReducer,
  })
);
