import React, { useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { ReactCookieProps, withCookies } from 'react-cookie';
import dotenv from 'dotenv';
import { RootState } from './modules';
import { setuser } from './modules/login';
import { ThemeProvider } from './style/typed-compoennts';
// import {SetUserContainer} from './containers/SetUserContainer';
import { theme } from './style/theme';
import Home from './components/Home';
import makeUserState from './modules/loginuser';
import { loginUser } from './modules/login/action';

dotenv.config();
const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
    background: ${theme.background};

    @font-face {
      font-family: 'Anton Regular';
      src: url('./style/fonts/Anton-Regular.woff') format('woff'); /* Modern Browsers */
      src: url('./style/fonts/Anton-Regular.ttf') format('truetype'); /* Safari, Android, iOS */
      font-style: normal; 
      font-weight: 400;
    }
    font-family: "Anton Regular", sans-serif;
  }
`;

const App:React.FC<ReactCookieProps> = (props:ReactCookieProps) => {
  const currentUserState = useSelector((state:RootState) => state.login);
  const dispatch = useDispatch();
  useEffect(() => {
    const token = props.cookies && props.cookies.get('token');
    const UpdateUserState = new Promise<loginUser>((resolve) => {
      makeUserState(token, resolve);
    });
    if (token && currentUserState.name === '') {
      UpdateUserState.then((userState:loginUser) => dispatch(setuser(userState)));
    }
    console.log(currentUserState);
  }, [currentUserState]);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
};

export default withCookies(App);
