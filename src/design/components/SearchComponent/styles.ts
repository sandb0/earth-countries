import styled from 'styled-components';

export const SectionStyled = styled.section`
  width: 600px;
  margin: 0 auto;

  @media only screen and (max-width: 768px) {
    width: 80%;
  }
`;

export const SearchContainerStyled = styled.div`
  form {
    border: 2px solid var(--primary-color);
    border-radius: 50px;
    padding: 15px 30px;
    display: flex;
    justify-content: space-between;
    transition: all 0.3s;

    &.onFocus {
      box-shadow: 0 4px 3px rgba(0, 0, 0, 0.3);
      transform: translateY(-2px);
    }
  }
`;

export const InputStyled = styled.input`
  width: calc(100% - 45px);
  letter-spacing: 1px;
`;
