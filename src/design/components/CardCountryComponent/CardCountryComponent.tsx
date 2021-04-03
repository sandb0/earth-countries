import React from 'react';

import {
  ContainerStyled,
  ThumbnailStyled,
  ContentContainerStyled,
} from './styles';

const CardCountryComponent: React.FC = () => {
  return (
    <ContainerStyled>
      <ThumbnailStyled>
        <img src="https://restcountries.eu/data/afg.svg" />
      </ThumbnailStyled>

      <ContentContainerStyled>
        <h4>Afghanistan</h4>
        <p>Kabul</p>
      </ContentContainerStyled>
    </ContainerStyled>
  );
};

export default CardCountryComponent;
