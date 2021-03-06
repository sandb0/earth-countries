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
    const storagedCountries = Object.keys(this.localStorage);

    let countriesResponse = storagedCountries.map((storagedCountryId) => {
      const countryStringify =
        this.localStorage.getItem(storagedCountryId) ?? '';

      return JSON.parse(countryStringify) as CountryDTO;
    });

    countriesResponse = countriesResponse.sort((a, b) => {
      return a.id - b.id;
    });

    return this.repositoryMapper.toDomain(countriesResponse);
  }

  public async findById(countryId: number): Promise<Country> {
    const countryStringify =
      this.localStorage.getItem(`country_${countryId}`) ?? '';
    const countryResponse = JSON.parse(countryStringify) as CountryDTO;

    return this.repositoryMapper.toDomain([countryResponse])[0];
  }

  public async findByName(countryName: string): Promise<Country[]> {
    const storagedCountries = Object.keys(this.localStorage);
    let countriesResponse: CountryDTO[] = [];

    storagedCountries.forEach((storagedCountry) => {
      const countryStringify = this.localStorage.getItem(storagedCountry) ?? '';
      const country = JSON.parse(countryStringify) as CountryDTO;

      const _countryNameToFind = countryName.toLowerCase();
      const _countryNameCompare = country.name.toLowerCase();

      if (_countryNameCompare.includes(_countryNameToFind)) {
        countriesResponse.push(country);
      }
    });

    countriesResponse = countriesResponse.sort((a, b) => {
      return a.id - b.id;
    });

    return this.repositoryMapper.toDomain(countriesResponse);
  }

  public async saveAll(countries: Country[]): Promise<void> {
    countries.forEach((country) => {
      const countryStringify = JSON.stringify(country);
      this.localStorage.setItem(`country_${country.id}`, countryStringify);
    });

    this._isAllCountriesWasFetched = true;
  }

  public async save(country: Country): Promise<void> {
    const countryStringify = JSON.stringify(country);
    this.localStorage.setItem(`country_${country.id}`, countryStringify);
  }
}
