import CountryService from '../../application/CountryService';
import CountryActions from '../StateManagers/Redux/CountryActions';

export default class CountryPresenter {
  private applicationService: CountryService;
  private reduxActions: CountryActions;

  public constructor(
    applicationService: CountryService,
    reduxActions: CountryActions
  ) {
    this.applicationService = applicationService;
    this.reduxActions = reduxActions;
  }

  public async findAll() {
    const countries = await this.applicationService.findAll();

    return this.reduxActions.findAll(countries);
  }
}
