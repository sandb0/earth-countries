import styled from 'styled-components';

export const SectionStyled = styled.section`
  width: 600px;
  margin: 0 auto;

  @media only screen and (max-width: 768px) {
    width: 80%;
  }
`;

export const SearchContainerStyled = styled.div`
  border: 2px solid var(--primary-color);
  border-radius: 50px;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
`;

export const InputStyled = styled.input`
  width: calc(100% - 45px);
  letter-spacing: 1px;
`;
