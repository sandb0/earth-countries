import Country from '../../domain/Country';
import CountryMapper from './CountryMapper';

export default class CountryRepositoryLocalStorage {
  private _isAllCountriesWasFetched: boolean;
  private repositoryMapper: CountryMapper;

  public constructor(repositoryMapper: CountryMapper) {
    this._isAllCountriesWasFetched = false;
    this.repositoryMapper = repositoryMapper;
  }

  get isAllCountriesWasFetched() {
    return this._isAllCountriesWasFetched;
  }

  public async findAll(): Promise<Country[]> {
    const countriesStringify = localStorage.getItem('countries') ?? '';
    const countriesRaw = JSON.parse(countriesStringify);
    return this.repositoryMapper.toDomain(countriesRaw);
  }

  public async saveAll(countries: Country[]): Promise<void> {
    const countriesStringify = JSON.stringify(countries);
    localStorage.setItem('countries', countriesStringify);
    this._isAllCountriesWasFetched = true;
  }
}
