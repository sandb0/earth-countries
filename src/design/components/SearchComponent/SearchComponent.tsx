import React from 'react';
import { FiSearch } from 'react-icons/fi';

import { SectionStyled, SearchContainerStyled, InputStyled } from './styles';

const SearchComponent: React.FC = () => {
  return (
    <SectionStyled>
      <SearchContainerStyled>
        <InputStyled
          type="text"
          placeholder="Qual país você esta procurando?"
        />
        <FiSearch size={20} />
      </SearchContainerStyled>
    </SectionStyled>
  );
};

export default SearchComponent;
