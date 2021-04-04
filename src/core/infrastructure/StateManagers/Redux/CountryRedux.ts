import Country from '../../../domain/Country';

export type CountryReduxStore = {
  country: CountryReduxState;
};

export type CountryReduxState = {
  countries: Country[];
};

export type CountryReduxAction = {
  type: 'FIND';
  payload: CountryReduxState;
};
