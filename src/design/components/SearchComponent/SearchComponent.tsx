import React, { FormEvent, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useDispatch } from 'react-redux';

import { CountryReduxAction } from '../../../core/infrastructure/StateManagers/Redux/CountryRedux';

import { SectionStyled, SearchContainerStyled, InputStyled } from './styles';

type Props = {
  onSubmit: (countryName: string) => Promise<CountryReduxAction>;
};

const SearchComponent: React.FC<Props> = (props: Props) => {
  const { onSubmit } = props;

  const [inputFocus, setInputFocus] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    dispatch(await onSubmit(searchValue));
  };

  return (
    <SectionStyled>
      <SearchContainerStyled>
        <form onSubmit={(event) => handleSubmit(event)} className={inputFocus}>
          <InputStyled
            type="text"
            placeholder="Qual país você esta procurando?"
            onFocus={() => setInputFocus('onFocus')}
            onBlur={() => setInputFocus('')}
            onChange={(event) => setSearchValue(event.target.value)}
          />

          <FiSearch size={20} />
        </form>
      </SearchContainerStyled>
    </SectionStyled>
  );
};

export default SearchComponent;
