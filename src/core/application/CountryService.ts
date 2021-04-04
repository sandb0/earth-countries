import Country from '../domain/Country';
import CountryRepositoryGraphQL from '../infrastructure/Repositories/CountryRepositoryGraphQL';
import CountryRepositoryLocalStorage from '../infrastructure/Repositories/CountryRepositoryLocalStorage';

export default class CountryService {
  private localStorageRepository: CountryRepositoryLocalStorage;
  private remoteRepository: CountryRepositoryGraphQL;

  public constructor(
    localStorageRepository: CountryRepositoryLocalStorage,
    remoteRepository: CountryRepositoryGraphQL
  ) {
    this.localStorageRepository = localStorageRepository;
    this.remoteRepository = remoteRepository;
  }

  public async findAll(): Promise<Country[]> {
    if (this.localStorageRepository.isAllCountriesWasFetched) {
      return await this.localStorageRepository.findAll();
    } else {
      const countries = await this.remoteRepository.findAll();
      await this.localStorageRepository.saveAll(countries);

      return countries;
    }
  }
}
