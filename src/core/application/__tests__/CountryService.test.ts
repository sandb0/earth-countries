import { CountryDTO } from '../../infrastructure/Repositories/CountryDTO';
import CountryService from '../CountryService';

/** Mock CountryRepositoryLocalStorage */
const CountryRepositoryLocalStorageMock = jest.fn();
const countryRepositoryLocalStorageMock = new CountryRepositoryLocalStorageMock();

/** Mock CountryRepositoryGraphQL */
const CountryRepositoryGraphQLMock = jest.fn();
const countryRepositoryGraphQLMock = new CountryRepositoryGraphQLMock();

describe('CountryService', () => {
  describe('findAll', () => {
    it('should call `CountryRepositoryLocalStorageMock.findAll()` if `isAllCountriesWasFetched` is true', async () => {
      const expectedCountries = 'Countries';

      countryRepositoryLocalStorageMock.isAllCountriesWasFetched = true;
      countryRepositoryLocalStorageMock.findAll = jest
        .fn()
        .mockReturnValue(expectedCountries);

      const SUT = new CountryService(
        countryRepositoryLocalStorageMock,
        countryRepositoryGraphQLMock
      );

      const countries = await SUT.findAll();

      expect(countryRepositoryLocalStorageMock.findAll).toBeCalledTimes(1);
      expect(countries).toBe(expectedCountries);
    });

    it('should call `CountryRepositoryLocalStorageMock.findAll()` if `isAllCountriesWasFetched` is false', async () => {
      const expectedCountries: string = 'Countries';

      countryRepositoryLocalStorageMock.isAllCountriesWasFetched = false;
      countryRepositoryLocalStorageMock.saveAll = jest.fn();
      countryRepositoryGraphQLMock.findAll = jest
        .fn()
        .mockReturnValue(expectedCountries);

      const SUT = new CountryService(
        countryRepositoryLocalStorageMock,
        countryRepositoryGraphQLMock
      );

      const countries = await SUT.findAll();

      expect(countryRepositoryGraphQLMock.findAll).toBeCalledTimes(1);
      expect(countryRepositoryLocalStorageMock.saveAll).toBeCalledTimes(1);
      expect(countries).toBe(expectedCountries);
    });
  });

  describe('findById', () => {
    it('should call `CountryRepositoryLocalStorageMock.findById()` if `isAllCountriesWasFetched` is true', async () => {
      const expectedCountry = 'Country';

      countryRepositoryLocalStorageMock.isAllCountriesWasFetched = true;
      countryRepositoryLocalStorageMock.findById = jest
        .fn()
        .mockReturnValue(expectedCountry);

      const SUT = new CountryService(
        countryRepositoryLocalStorageMock,
        countryRepositoryGraphQLMock
      );

      const countryId = 0;

      const country = await SUT.findById(countryId);

      expect(countryRepositoryLocalStorageMock.findById).toBeCalledTimes(1);
      expect(country).toBe(expectedCountry);
    });

    it('should call `CountryRepositoryLocalStorageMock.findById()` if `isAllCountriesWasFetched` is false', async () => {
      const expectedCountries: string = 'Countries';

      countryRepositoryLocalStorageMock.isAllCountriesWasFetched = false;
      countryRepositoryLocalStorageMock.save = jest.fn();
      countryRepositoryGraphQLMock.findById = jest
        .fn()
        .mockReturnValue(expectedCountries);

      const SUT = new CountryService(
        countryRepositoryLocalStorageMock,
        countryRepositoryGraphQLMock
      );

      const countryId = 0;

      const countries = await SUT.findById(countryId);

      expect(countryRepositoryGraphQLMock.findById).toBeCalledTimes(1);
      expect(countryRepositoryLocalStorageMock.save).toBeCalledTimes(1);
      expect(countries).toBe(expectedCountries);
    });
  });

  describe('findByName', () => {
    it('should call `CountryRepositoryLocalStorageMock.findByName()`', async () => {
      const expectedCountries = 'Countries';

      countryRepositoryLocalStorageMock.isAllCountriesWasFetched = true;
      countryRepositoryLocalStorageMock.findByName = jest
        .fn()
        .mockReturnValue(expectedCountries);

      const SUT = new CountryService(
        countryRepositoryLocalStorageMock,
        countryRepositoryGraphQLMock
      );

      const countryName = '';

      const countries = await SUT.findByName(countryName);

      expect(countryRepositoryLocalStorageMock.findByName).toBeCalledTimes(1);
      expect(countries).toBe(expectedCountries);
    });
  });

  describe('save', () => {
    it('should call `CountryRepositoryLocalStorageMock.save()`', async () => {
      const expectedCountries = 'Countries';

      countryRepositoryLocalStorageMock.isAllCountriesWasFetched = true;
      countryRepositoryLocalStorageMock.save = jest
        .fn()
        .mockReturnValue(expectedCountries);
      countryRepositoryLocalStorageMock.findById = jest
        .fn()
        .mockReturnValue(expectedCountries);

      const SUT = new CountryService(
        countryRepositoryLocalStorageMock,
        countryRepositoryGraphQLMock
      );

      const country: CountryDTO = {
        id: 0,
        name: '',
        area: 0,
        population: 0,
        capital: '',
        flag: {
          svgFile: '',
        },
        topLevelDomains: [{ name: '' }],
      };

      const countryResponse = await SUT.save(country);

      expect(countryRepositoryLocalStorageMock.save).toBeCalledTimes(1);
      expect(countryRepositoryLocalStorageMock.findById).toBeCalledTimes(1);
      expect(countryResponse).toBe(expectedCountries);
    });
  });
});
