export type FlagProps = {
  svgFile: string;
};

export type CountryDTO = {
  id: number;
  name: string;
  area: number;
  population: number;
  capital: string;
  flag: FlagProps;
};
