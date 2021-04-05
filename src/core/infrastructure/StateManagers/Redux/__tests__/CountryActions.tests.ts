import CountryActions from '../CountryActions';

describe('CountryActions', () => {
  describe('findAll', () => {
    it('should return an redux action', () => {
      const countries: any = [];
      const expectedAction = {
        type: 'FIND',
        payload: { countries },
      };

      const SUT = new CountryActions();

      const reduxAction = SUT.findAll(countries);

      expect(reduxAction).toEqual(expectedAction);
    });
  });

  describe('findById', () => {
    it('should return an redux action', () => {
      const country: any = [];
      const expectedAction = {
        type: 'FIND',
        payload: { countries: [country] },
      };

      const SUT = new CountryActions();

      const reduxAction = SUT.findById(country);

      expect(reduxAction).toEqual(expectedAction);
    });
  });

  describe('findByName', () => {
    it('should return an redux action', () => {
      const countries: any = [];
      const expectedAction = {
        type: 'FIND',
        payload: { countries: countries },
      };

      const SUT = new CountryActions();

      const reduxAction = SUT.findByName(countries);

      expect(reduxAction).toEqual(expectedAction);
    });
  });

  describe('save', () => {
    it('should return an redux action', () => {
      const country: any = [];
      const expectedAction = {
        type: 'FIND',
        payload: { countries: [country] },
      };

      const SUT = new CountryActions();

      const reduxAction = SUT.save(country);

      expect(reduxAction).toEqual(expectedAction);
    });
  });
});
