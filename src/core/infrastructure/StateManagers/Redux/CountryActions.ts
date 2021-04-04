import Country from '../../../domain/Country';
import { CountryReduxAction } from './CountryRedux';

export default class CountryActions {
  public findAll(countries: Country[]): CountryReduxAction {
    return {
      type: 'FIND_ALL',
      payload: { countries },
    };
  }
}
