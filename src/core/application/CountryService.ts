import Country from '../domain/Country';
import { CountryDTO } from '../infrastructure/Repositories/CountryDTO';
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

  public async findById(countryId: number): Promise<Country> {
    if (this.localStorageRepository.isAllCountriesWasFetched) {
      return await this.localStorageRepository.findById(countryId);
    } else {
      const country = await this.remoteRepository.findById(countryId);
      await this.localStorageRepository.save(country);

      return country;
    }
  }

  public async findByName(countryName: string): Promise<Country[]> {
    return await this.localStorageRepository.findByName(countryName);
  }

  public async save(countryData: CountryDTO): Promise<Country> {
    const country = new Country(countryData);
    await this.localStorageRepository.save(country);

    return await this.localStorageRepository.findById(country.id);
  }
}
