import CountryService from '../../application/CountryService';
import { CountryDTO } from '../Repositories/CountryDTO';
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

  public async findById(countryId: number) {
    const country = await this.applicationService.findById(countryId);

    return this.reduxActions.findById(country);
  }

  public async findByName(countryName: string) {
    const countries = await this.applicationService.findByName(countryName);

    return this.reduxActions.findByName(countries);
  }

  public async save(form: CountryDTO) {
    const country = await this.applicationService.save(form);
    return this.reduxActions.save(country);
  }
}
