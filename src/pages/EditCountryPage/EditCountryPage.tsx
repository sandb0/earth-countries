import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import CountryPresenter from '../../core/infrastructure/Presenters/CountryPresenter';
import { CountryDTO } from '../../core/infrastructure/Repositories/CountryDTO';
import { CountryReduxStore } from '../../core/infrastructure/StateManagers/Redux/CountryRedux';

import { HeaderSection } from '../../design/sections';

import { ContainerStyled, FormStyled } from './styles';

type RouterParamsProps = {
  countryId?: string;
};

type Props = {
  presenter: CountryPresenter;
};

const EditCountryPage: React.FC<Props> = (props: Props) => {
  const { presenter } = props;

  const history = useHistory();

  const dispatch = useDispatch();
  const countries = useSelector(
    (state: CountryReduxStore) => state.country.countries
  );
  const country = countries[0];

  const { countryId } = useParams<RouterParamsProps>();
  const _countryId = parseInt(countryId ?? '0');

  const [form, setForm] = useState<CountryDTO>({
    id: _countryId,
    flag: { svgFile: '' },
    name: '',
    area: 0,
    population: 0,
    capital: '',
  });

  useEffect(() => {
    (async () => {
      dispatch(await presenter.findById(_countryId));
    })();
  }, [dispatch]);

  useEffect(() => {
    setForm({
      id: _countryId,
      flag: { svgFile: country?.flag.svgFile },
      name: country?.name,
      area: parseInt(country?.area.split('.').join('')),
      population: parseInt(country?.population.split('.').join('')),
      capital: country?.capital,
    });
  }, [country]);

  const handleSubmit = async (event: React.MouseEvent) => {
    event.preventDefault();
    dispatch(await presenter.save(form));
    history.goBack();
  };

  return (
    <ContainerStyled>
      <HeaderSection backTo={`/country/${countryId}`} />

      <main>
        <FormStyled>
          <div>
            <p>Flag SVG</p>
            <input
              type="text"
              value={form.flag.svgFile}
              onChange={(event) =>
                setForm({ ...form, flag: { svgFile: event.target.value } })
              }
            />
          </div>

          <div>
            <p>Nome</p>
            <input
              type="text"
              value={form.name}
              onChange={(event) =>
                setForm({ ...form, name: event.target.value })
              }
            />
          </div>

          <div>
            <p>Área</p>
            <input
              type="text"
              value={form.area}
              onChange={(event) =>
                setForm({ ...form, area: parseInt(event.target.value) })
              }
            />
          </div>

          <div>
            <p>População</p>
            <input
              type="text"
              value={form.population}
              onChange={(event) =>
                setForm({ ...form, population: parseInt(event.target.value) })
              }
            />
          </div>

          <div>
            <p>Capital</p>
            <input
              type="text"
              value={form.capital}
              onChange={(event) =>
                setForm({ ...form, capital: event.target.value })
              }
            />
          </div>

          <div>
            <button type="submit" onClick={(event) => handleSubmit(event)}>
              Salvar alterações
            </button>
          </div>
        </FormStyled>
      </main>
    </ContainerStyled>
  );
};

export default EditCountryPage;
