import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

import { SectionStyled, SearchContainerStyled, InputStyled } from './styles';

const SearchComponent: React.FC = () => {
  const [inputFocus, setInputFocus] = useState('');

  return (
    <SectionStyled>
      <SearchContainerStyled className={inputFocus}>
        <InputStyled
          type="text"
          placeholder="Qual país você esta procurando?"
          onFocus={() => setInputFocus('onFocus')}
          onBlur={() => setInputFocus('')}
        />
        <FiSearch size={20} />
      </SearchContainerStyled>
    </SectionStyled>
  );
};

export default SearchComponent;
