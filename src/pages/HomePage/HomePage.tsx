import React from 'react';

import { SearchComponent, CardCountryComponent } from '../../design/components';
import { HeaderSection } from '../../design/sections';

import { ContainerStyled, CardsCountriesContainerStyled } from './styles';

const HomePage: React.FC = () => {
  return (
    <ContainerStyled>
      <HeaderSection />

      <main>
        <SearchComponent />

        <CardsCountriesContainerStyled>
          <CardCountryComponent />
          <CardCountryComponent />
          <CardCountryComponent />
          <CardCountryComponent />
          <CardCountryComponent />
          <CardCountryComponent />
          <CardCountryComponent />
        </CardsCountriesContainerStyled>
      </main>
    </ContainerStyled>
  );
};

export default HomePage;
