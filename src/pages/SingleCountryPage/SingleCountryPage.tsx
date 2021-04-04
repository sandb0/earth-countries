import React, { useEffect } from 'react';
import { FiEdit } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import CountryPresenter from '../../core/infrastructure/Presenters/CountryPresenter';
import { CountryReduxStore } from '../../core/infrastructure/StateManagers/Redux/CountryRedux';

import { HeaderSection } from '../../design/sections';

import { ContainerStyled, ContentContainerStyled } from './styles';

type RouterParamsProps = {
  countryId?: string;
};

type Props = {
  presenter: CountryPresenter;
};

const SingleCountryPage: React.FC<Props> = (props: Props) => {
  const { presenter } = props;

  const dispatch = useDispatch();
  const countries = useSelector(
    (state: CountryReduxStore) => state.country.countries
  );
  const country = countries[0];

  const { countryId } = useParams<RouterParamsProps>();

  useEffect(() => {
    (async () => {
      const _countryId = parseInt(countryId ?? '0');
      dispatch(await presenter.findById(_countryId));
    })();
  }, [dispatch]);

  return (
    <ContainerStyled>
      <HeaderSection backTo="/" />

      <main>
        <ContentContainerStyled>
          <img alt="Brasil - Brasília" src={`${country?.flag.svgFile}`} />
        </ContentContainerStyled>

        <ContentContainerStyled>
          <p>
            O <span>{country?.name}</span> tem como capital a cidade de{' '}
            <span>{country?.capital}</span>, uma área de{' '}
            <span>{country?.area}m2</span> e uma população de aproximadamente{' '}
            <span>{country?.population}</span> pessoas.
          </p>

          <p>
            O domínio mais usado é{' '}
            <span>{country?.topLevelDomains[0].name}</span>
          </p>
        </ContentContainerStyled>

        <ContentContainerStyled>
          <Link title="Editar este país" to={`/country/${countryId}/edit`}>
            <FiEdit size={20} />
          </Link>
        </ContentContainerStyled>
      </main>
    </ContainerStyled>
  );
};

export default SingleCountryPage;
