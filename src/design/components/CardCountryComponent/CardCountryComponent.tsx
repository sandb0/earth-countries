import React from 'react';
import { Link } from 'react-router-dom';

import {
  ContainerStyled,
  ThumbnailStyled,
  ContentContainerStyled,
} from './styles';

type Props = {
  id: number;
  name: string;
  flagSVG: string;
  capital: string;
};

const CardCountryComponent: React.FC<Props> = (props: Props) => {
  const { id, name, flagSVG, capital } = props;

  return (
    <ContainerStyled>
      <Link to={`/country/${id}`}>
        <ThumbnailStyled>
          <img src={flagSVG} />
        </ThumbnailStyled>

        <ContentContainerStyled>
          <h4>{name}</h4>
          <p>{capital}</p>
        </ContentContainerStyled>
      </Link>
    </ContainerStyled>
  );
};

export default CardCountryComponent;
