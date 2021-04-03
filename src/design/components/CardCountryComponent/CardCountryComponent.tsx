import React from 'react';

import {
  ContainerStyled,
  ThumbnailStyled,
  ContentContainerStyled,
} from './styles';

type Props = {
  name: string;
  flagSVG: string;
  capital: string;
};

const CardCountryComponent: React.FC<Props> = (props: Props) => {
  const { name, flagSVG, capital } = props;

  return (
    <ContainerStyled>
      <ThumbnailStyled>
        <img src={flagSVG} />
      </ThumbnailStyled>

      <ContentContainerStyled>
        <h4>{name}</h4>
        <p>{capital}</p>
      </ContentContainerStyled>
    </ContainerStyled>
  );
};

export default CardCountryComponent;
