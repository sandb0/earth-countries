import styled from 'styled-components';

export const HeaderStyled = styled.header`
  text-align: center;
  margin: 75px 0 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: var(--primary-color);
    margin-right: 20px;
    margin-top: 5px;
    transition: all 0.2s;

    &:hover {
      transform: translateX(-3px);
    }
  }
`;
