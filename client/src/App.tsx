import React, { useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';
import { ReactCookieProps, withCookies } from 'react-cookie';
import {RootState} from './modules';
import {setuser} from './modules/login'
import dotenv from 'dotenv';
import { ThemeProvider } from './style/typed-compoennts';
// import {SetUserContainer} from './containers/SetUserContainer';
import { theme } from './style/theme';
import Home from './components/Home';
import makeUserState from './modules/loginuser';


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
  const currentUserState = useSelector((state:RootState)=>state.login);
  const dispatch = useDispatch()
  useEffect(()=>{
    const UpdateUserState = async () =>{
      let token=  props.cookies && props.cookies.get('token') 
      token = token || '';
      const userState = await makeUserState(token);
      dispatch(setuser(userState));
    }
    UpdateUserState();
  },[currentUserState.isLogin]);
  return (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Home />
  </ThemeProvider>
  );
}

export default withCookies(App);
