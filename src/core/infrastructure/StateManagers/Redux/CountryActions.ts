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

  public save(country: Country): CountryReduxAction {
    return {
      type: 'SAVE',
      payload: { countries: [country] },
    };
  }
}
