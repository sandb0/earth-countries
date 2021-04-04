import Country from '../../domain/Country';
import CountryMapper from './CountryMapper';
import { CountryDTO } from './CountryDTO';

export default class CountryRepositoryLocalStorage {
  private _isAllCountriesWasFetched: boolean;
  private repositoryMapper: CountryMapper;
  private localStorage: Storage;

  public constructor(repositoryMapper: CountryMapper, localStorage: Storage) {
    this._isAllCountriesWasFetched = false;
    this.repositoryMapper = repositoryMapper;
    this.localStorage = localStorage;
  }

  get isAllCountriesWasFetched() {
    return this._isAllCountriesWasFetched;
  }

  public async findAll(): Promise<Country[]> {
    const countriesStringify = this.localStorage.getItem('countries') ?? '';
    const countriesResponse = JSON.parse(countriesStringify) as CountryDTO[];

    return this.repositoryMapper.toDomain(countriesResponse);
  }

  public async saveAll(countries: Country[]): Promise<void> {
    const countriesStringify = JSON.stringify(countries);
    this.localStorage.setItem('countries', countriesStringify);
    this._isAllCountriesWasFetched = true;
  }
}
