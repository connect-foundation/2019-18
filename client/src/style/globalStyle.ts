import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';
import BebasNeueRegularTtf from './fonts/BebasNeueRegular.ttf';
import DoHyeonRegularTtf from './fonts/DoHyeonRegular.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Bebas Neue';
    src: local('Bebas Neue'), local('Bebas Neue'),
    url(${BebasNeueRegularTtf}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Do Hyeon';
    src: local('Do Hyeon'), local('Do Hyeon'),
    url(${DoHyeonRegularTtf}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  body{
    padding: 0;
    margin: 0;
    background: ${theme.background};
    font-family: SFProText, SFProText, "Apple SD Gothic Neo", AppleSDGothicNeo, "Malgun Gothic", "맑은 고딕", sans-serif;
  }
  div#root{
    height: 100%;
    display:flex;
    flex-direction: column;
  }

`;

export default GlobalStyle;
