import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';
import RobotoLightWoff from './fonts/RobotoLight.woff';
import RobotoLightWoff2 from './fonts/RobotoLight.woff2';

const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
    background: ${theme.background};
    font-family: 'Roboto Light';
  }
  @font-face {
    font-family: 'Roboto Light';
    src: local('Roboto Light'), local('RobotoLight'),
    url(${RobotoLightWoff}) format(woff),
    url(${RobotoLightWoff2}) format(woff2);
    font-weight: 300;
    font-style: normal;
  }
`;

export default GlobalStyle;
