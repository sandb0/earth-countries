import {
  CountryDTO,
  FlagProps,
  TopLevelDomainsProps,
} from '../infrastructure/Repositories/CountryDTO';

export default class Country {
  public id: number;
  public name: string;
  public area: string;
  public population: string;
  public capital: string;
  public flag: FlagProps;
  public topLevelDomains: TopLevelDomainsProps[];

  public constructor(props: CountryDTO) {
    const {
      id,
      name,
      area,
      population,
      capital,
      flag,
      topLevelDomains,
    } = props;

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
    this.topLevelDomains = topLevelDomains;
  }
}
