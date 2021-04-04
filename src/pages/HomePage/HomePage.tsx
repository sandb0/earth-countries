import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Country from '../../core/domain/Country';
import CountryPresenter from '../../core/infrastructure/Presenters/CountryPresenter';
import { CountryReduxStore } from '../../core/infrastructure/StateManagers/Redux/CountryRedux';

import { SearchComponent, CardCountryComponent } from '../../design/components';
import { HeaderSection } from '../../design/sections';

import { ContainerStyled, CardsCountriesContainerStyled } from './styles';

type Props = {
  presenter: CountryPresenter;
};

const HomePage: React.FC<Props> = (props: Props) => {
  const { presenter } = props;
  const dispatch = useDispatch();
  const countries = useSelector(
    (state: CountryReduxStore) => state.country.countries
  );

  useEffect(() => {
    (async () => {
      dispatch(await presenter.findAll());
    })();
  }, [dispatch]);

  const cardsCountriesComponents = countries.map(
    (country: Country, index: number) => (
      <CardCountryComponent
        key={index}
        id={country.id}
        name={country.name}
        flagSVG={country.flag.svgFile}
        capital={country.capital}
      />
    )
  );

  return (
    <ContainerStyled>
      <HeaderSection />

      <main>
        <SearchComponent />

        <CardsCountriesContainerStyled>
          {cardsCountriesComponents}
        </CardsCountriesContainerStyled>
      </main>
    </ContainerStyled>
  );
};

export default HomePage;
