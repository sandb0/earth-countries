import CountryRepositoryLocalStorage from '../CountryRepositoryLocalStorage';

/** Mock CountryService */
const CoutryMapperMock = jest.fn();
const coutryMapperMock = new CoutryMapperMock();

/** Mock CountryActions */
const LocalStorageMock = jest.fn();
const localStorageMock = new LocalStorageMock();

describe('CountryRepositoryLocalStorage', () => {
  describe('findAll', () => {
    it('should call ...', async () => {
      const countryStringify = JSON.stringify(['Countries']);

      localStorageMock.getItem = jest.fn().mockReturnValue(countryStringify);
      coutryMapperMock.toDomain = jest
        .fn()
        .mockReturnValue(JSON.parse(countryStringify));

      const SUT = new CountryRepositoryLocalStorage(
        coutryMapperMock,
        localStorageMock
      );

      const countries = await SUT.findAll();

      expect(countries).toEqual(JSON.parse(countryStringify));
      expect(localStorageMock.getItem).toBeCalledTimes(1);
    });
  });
});
