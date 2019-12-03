import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';
import RobotoLightWoff from './fonts/RobotoLight.woff';
import RobotoLightWoff2 from './fonts/RobotoLight.woff2';
import NoteworthyLightWoff from './fonts/NoteworthyLight.woff';
import NoteworthyLightWoff2 from './fonts/NoteworthyLight.woff2';
import BebasNeueRegular from './fonts/BebasNeueRegular.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto Light';
    src: local('Roboto Light'), local('RobotoLight'),
    url(${RobotoLightWoff}) format('woff'),
    url(${RobotoLightWoff2}) format('woff2');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Noteworthy Light';
    src: local('Noteworthy Light'), local('NoteworthyLight'),
    url(${NoteworthyLightWoff}) format('woff'),
    url(${NoteworthyLightWoff2}) format('woff2');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Bebas Neue';
    src: local('Bebas Neue'), local('Bebas Neue'),
    url(${BebasNeueRegular}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  body{
    padding: 0;
    margin: 0;
    background: ${theme.background};
    font-family: 'Bebas Neue', "NoteWorthy Light", 'Roboto Light';
  }

`;

export default GlobalStyle;
