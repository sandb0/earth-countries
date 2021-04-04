import {
  CountryDTO,
  FlagProps,
} from '../infrastructure/Repositories/CountryDTO';

export default class Country {
  public id: number;
  public name: string;
  public area: number;
  public population: number;
  public capital: string;
  public flag: FlagProps;

  public constructor(props: CountryDTO) {
    const { id, name, area, population, capital, flag } = props;

    this.id = id;
    this.name = name;
    this.area = area;
    this.population = population;
    this.capital = capital;
    this.flag = flag;
  }
}
