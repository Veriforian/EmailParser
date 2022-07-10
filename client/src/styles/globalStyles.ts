import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}
html {
  padding: 2rem;
  background-color: #eee;
  font-size: 62.5%;
  scroll-behavior: smooth;
}
body {
  //Reset
  box-sizing: border-box;
  //Typography
  font-size: ${(props) => props.theme.defaultFontSize};
  font-family: "Raleway", sans-serif;
  line-height: 1.7;
  position: relative;
  z-index: -1;
}
`;

export default GlobalStyle;
