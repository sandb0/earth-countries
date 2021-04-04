import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { HeaderStyled } from './styles';

type Props = {
  backTo?: string;
};

const HeaderSection: React.FC<Props> = (props: Props) => {
  const { backTo } = props;

  const backComponent = backTo ? (
    <Link title="Voltar" to={backTo}>
      <FiArrowLeft size={20} />
    </Link>
  ) : (
    ''
  );

  return (
    <HeaderStyled>
      {backComponent}

      <h1>Earth Countries</h1>
    </HeaderStyled>
  );
};

HeaderSection.defaultProps = {
  backTo: '',
};

export default HeaderSection;
