import { FlagProps } from '../infrastructure/Repositories/CountryRepositoryGraphQL';

export type CountryProps = {
  name: string;
  area: number;
  population: number;
  capital: string;
  flag: FlagProps;
};

export default class Country {
  public name: string;
  public area: number;
  public population: number;
  public capital: string;
  public flag: FlagProps;

  public constructor(props: CountryProps) {
    const { name, area, population, capital, flag } = props;

    this.name = name;
    this.area = area;
    this.population = population;
    this.capital = capital;
    this.flag = flag;
  }
}
