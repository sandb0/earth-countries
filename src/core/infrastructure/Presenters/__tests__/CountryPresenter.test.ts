import { CountryDTO } from '../../Repositories/CountryDTO';
import CountryPresenter from '../CountryPresenter';

/** Mock CountryService */
const CountryServiceMock = jest.fn();
const countryServiceMock = new CountryServiceMock();

/** Mock CountryActions */
const CountryActionsMock = jest.fn();
const countryActionsMock = new CountryActionsMock();

describe('CountryPresenter', () => {
  describe('findAll', () => {
    it('should call the application service `CountryService.findAll()` and redux action `CountryActions.findAll()`', async () => {
      const expectedAction = {
        type: 'FIND',
        payload: {},
      };

      const expectedCountries: any = [];

      countryServiceMock.findAll = jest.fn().mockReturnValue(expectedCountries);
      countryActionsMock.findAll = jest.fn().mockReturnValue(expectedAction);

      const SUT = new CountryPresenter(countryServiceMock, countryActionsMock);

      const reduxAction = await SUT.findAll();

      expect(countryServiceMock.findAll).toBeCalledTimes(1);
      expect(countryActionsMock.findAll).toBeCalledTimes(1);
      expect(countryActionsMock.findAll).toBeCalledWith(expectedCountries);
      expect(reduxAction).toBe(expectedAction);
    });
  });

  describe('findById', () => {
    it('should call the application service `CountryService.findById()` and redux action `CountryActions.findById()`', async () => {
      const expectedAction = {
        type: 'FIND',
        payload: {},
      };

      const expectedCountry: any = [];

      const countryId = 0;

      countryServiceMock.findById = jest.fn().mockReturnValue(expectedCountry);
      countryActionsMock.findById = jest.fn().mockReturnValue(expectedAction);

      const SUT = new CountryPresenter(countryServiceMock, countryActionsMock);

      const reduxAction = await SUT.findById(countryId);

      expect(countryServiceMock.findById).toBeCalledTimes(1);
      expect(countryActionsMock.findById).toBeCalledTimes(1);
      expect(countryActionsMock.findById).toBeCalledWith(expectedCountry);
      expect(reduxAction).toBe(expectedAction);
    });
  });

  describe('findByName', () => {
    it('should call the application service `CountryService.findByName()` and redux action `CountryActions.findByName()`', async () => {
      const expectedAction = {
        type: 'FIND',
        payload: {},
      };

      const expectedCountries: any = [];

      const countryName = '';

      countryServiceMock.findByName = jest
        .fn()
        .mockReturnValue(expectedCountries);
      countryActionsMock.findByName = jest.fn().mockReturnValue(expectedAction);

      const SUT = new CountryPresenter(countryServiceMock, countryActionsMock);

      const reduxAction = await SUT.findByName(countryName);

      expect(countryServiceMock.findByName).toBeCalledTimes(1);
      expect(countryActionsMock.findByName).toBeCalledTimes(1);
      expect(countryActionsMock.findByName).toBeCalledWith(expectedCountries);
      expect(reduxAction).toBe(expectedAction);
    });
  });

  describe('save', () => {
    it('should call the application service `CountryService.save()` and redux action `CountryActions.save()`', async () => {
      const expectedAction = {
        type: 'FIND',
        payload: {},
      };

      const expectedCountry: any = [];

      const country: CountryDTO = {
        id: 0,
        name: '',
        area: 0,
        population: 0,
        capital: '',
        flag: {
          svgFile: '',
        },
        topLevelDomains: [
          {
            name: '',
          },
        ],
      };

      countryServiceMock.save = jest.fn().mockReturnValue(expectedCountry);
      countryActionsMock.save = jest.fn().mockReturnValue(expectedAction);

      const SUT = new CountryPresenter(countryServiceMock, countryActionsMock);

      const reduxAction = await SUT.save(country);

      expect(countryServiceMock.save).toBeCalledTimes(1);
      expect(countryActionsMock.save).toBeCalledTimes(1);
      expect(countryActionsMock.save).toBeCalledWith(expectedCountry);
      expect(reduxAction).toBe(expectedAction);
    });
  });
});
