import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    font-family: inherit;
    font-style: inherit;
    font-weight: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
  }

  *,
  html,
  body,
  #root {
    font-family: "Ubuntu", sans-serif;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :root {
    --primary-color: #000;
  }
`;
