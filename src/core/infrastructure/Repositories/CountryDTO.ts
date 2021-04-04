export type FlagProps = {
  svgFile: string;
};

export type CountryDTO = {
  name: string;
  area: number;
  population: number;
  capital: string;
  flag: FlagProps;
};
