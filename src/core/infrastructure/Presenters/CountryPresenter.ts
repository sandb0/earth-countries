import Country from '../../domain/Country';
import CountryActions from '../StateManagers/Redux/CountryActions';

export default class CountryPresenter {
  private reduxActions: CountryActions;

  public constructor(reduxActions: CountryActions) {
    this.reduxActions = reduxActions;
  }

  public findAll() {
    const countries = [new Country()];
    return this.reduxActions.findAll(countries);
  }
}
