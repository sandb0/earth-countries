import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { HeaderSection } from '../../design/sections';

import { ContainerStyled, ContentContainerStyled } from './styles';

const SingleCountryPage: React.FC = () => {
  return (
    <ContainerStyled>
      <HeaderSection backTo="/" />

      <main>
        <ContentContainerStyled>
          <img
            alt="Brasil - Brasília"
            src="https://restcountries.eu/data/ala.svg"
          />
        </ContentContainerStyled>

        <ContentContainerStyled>
          <p>
            O <span>Brasil</span> tem como capital a cidade de{' '}
            <span>Brasília</span>, uma área de <span>100000m2</span> e uma
            população de aproximadamente <span>200.000.000</span> de pessoas.
          </p>

          <p>
            O domínio mais usado é <span>.com.br</span>
          </p>
        </ContentContainerStyled>

        <ContentContainerStyled>
          <Link title="Editar este país" to="/country/edit/1">
            <FiEdit size={20} />
          </Link>
        </ContentContainerStyled>
      </main>
    </ContainerStyled>
  );
};

export default SingleCountryPage;
