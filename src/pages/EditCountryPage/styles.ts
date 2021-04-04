import styled from 'styled-components';

export const ContainerStyled = styled.div`
  main {
    width: 960px;
    margin: 75px auto 0 auto;
    display: flex;
    justify-content: start;

    @media only screen and (max-width: 1024px) {
      width: 100%;
    }
  }
`;

export const FormStyled = styled.form`
  width: 400px;
  margin: 0 auto;

  input {
    width: 400px;
    border: 1px solid var(--primary-color);
    padding: 10px 20px;
    border-radius: 50px;
    margin-top: 5px;

    &:focus {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    @media only screen and (max-width: 768px) {
      width: 100%;
    }
  }

  button {
    border-radius: 50px;
    padding: 10px 25px;
    background-color: transparent;
    color: var(--primary-color);
    transition: all 0.3s;

    &:hover {
      background-color: var(--primary-color);
      color: var(--background-color);
      cursor: pointer;
    }
  }

  div {
    margin-bottom: 20px;
    text-align: right;

    p {
      text-align: left;
      font-weight: 500;
    }
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
  }
`;
