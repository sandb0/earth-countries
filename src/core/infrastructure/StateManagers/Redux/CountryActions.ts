import Country from '../../../domain/Country';
import { CountryReduxAction } from './CountryRedux';

export default class CountryActions {
  public findAll(countries: Country[]): CountryReduxAction {
    return {
      type: 'FIND',
      payload: { countries },
    };
  }

  public findById(country: Country): CountryReduxAction {
    return {
      type: 'FIND',
      payload: { countries: [country] },
    };
  }
}
