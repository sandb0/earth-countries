import {
  CountryDTO,
  FlagProps,
} from '../infrastructure/Repositories/CountryDTO';

export default class Country {
  public id: number;
  public name: string;
  public area: string;
  public population: string;
  public capital: string;
  public flag: FlagProps;

  public constructor(props: CountryDTO) {
    const { id, name, area, population, capital, flag } = props;

    this.id = id;
    this.name = name;
    this.area = area
      ? area.toLocaleString('pt-BR', { maximumFractionDigits: 2 })
      : 'NULL';
    this.population = population
      ? population.toLocaleString('pt-BR', {
          maximumFractionDigits: 2,
        })
      : 'NULL';
    this.capital = capital;
    this.flag = flag;
  }
}
