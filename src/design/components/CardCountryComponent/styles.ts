import styled from 'styled-components';

export const ContentContainerStyled = styled.div`
  padding: 10px 0;
  transition: all 0.3s;

  h4 {
    margin-bottom: 5px;
  }
`;

export const ContainerStyled = styled.div`
  width: calc(25% - 10px);
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  margin-right: 10px;
  border-radius: 10px;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    ${ContentContainerStyled} {
      padding: 10px;
    }
  }

  &:nth-child(4n) {
    margin-right: 0;
  }

  @media only screen and (max-width: 1024px) {
    width: calc(33% - 20px);
    margin-right: 20px;

    &:nth-child(4n) {
      margin-right: 20px;
    }

    &:nth-child(3n) {
      margin-right: 0;
    }
  }

  @media only screen and (max-width: 768px) {
    width: calc(50% - 20px);
    margin-right: 20px;

    &:nth-child(3n) {
      margin-right: 20px;
    }

    &:nth-child(2n) {
      margin-right: 0;
    }
  }
`;

export const ThumbnailStyled = styled.div`
  img {
    width: 100%;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
`;
