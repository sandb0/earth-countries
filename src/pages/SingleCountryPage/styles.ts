import styled from 'styled-components';

export const ContainerStyled = styled.div`
  main {
    width: 960px;
    margin: 75px auto 0 auto;
    display: flex;
    justify-content: start;

    img {
      width: 450px;
      border-radius: 6px;

      @media only screen and (max-width: 768px) {
        width: 100%;
      }
    }

    @media only screen and (max-width: 1024px) {
      width: 100%;
      flex-direction: column;
      align-items: center;
    }

    @media only screen and (max-width: 768px) {
      padding: 0 20px;
    }
  }
`;

export const ContentContainerStyled = styled.div`
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }

  a svg {
    color: var(--primary-color);
    transition: all 0.2s;

    &:hover {
      transform: translateY(-3px);
    }
  }

  p {
    font-size: 18px;
    display: block;
    margin-bottom: 10px;

    span {
      font-size: 18px;
      font-weight: 500;
      text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.25);
    }

    @media only screen and (max-width: 1024px) {
      width: 450px;
      padding: 20px;
      text-align: center;
    }

    @media only screen and (max-width: 768px) {
      width: 100%;
    }
  }

  @media only screen and (max-width: 1024px) {
    margin-right: 0;
  }
`;
