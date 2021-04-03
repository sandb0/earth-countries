import Country from '../../domain/Country';
import { CountryDTO } from './CountryRepositoryGraphQL';

export default class CountryMapper {
  public toDomain(countriesRaw: CountryDTO[]): Country[] {
    const countries = countriesRaw.map((country: CountryDTO) => {
      return new Country({
        name: country.name,
        area: country.area,
        population: country.population,
        flag: country.flag,
        capital: country.capital,
      });
    });

    return countries;
  }
}
