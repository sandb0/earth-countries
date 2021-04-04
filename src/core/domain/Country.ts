import {
  CountryDTO,
  FlagProps,
} from '../infrastructure/Repositories/CountryDTO';

export default class Country {
  public name: string;
  public area: number;
  public population: number;
  public capital: string;
  public flag: FlagProps;

  public constructor(props: CountryDTO) {
    const { name, area, population, capital, flag } = props;

    this.name = name;
    this.area = area;
    this.population = population;
    this.capital = capital;
    this.flag = flag;
  }
}
