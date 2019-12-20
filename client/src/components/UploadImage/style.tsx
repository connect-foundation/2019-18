import styled from 'styled-components';
import { theme } from '../../style/theme';

export const customButton = {
  width: '100px',
  height: '100px',
  borderRadius: '2px',
  fontWeight: '400',
  cursor: 'pointer',
  fontsize: '13px',
};


export const SeleteBox = styled.div`
  /* border: 2px solid blue; */
  width: 600px;
  height: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 0.5rem;
`;

export const Box = styled.div`
  border: solid 1px #dde1e5; 
  width: 100px;
  height: 100px;
  .fileContainer{
    padding: 0 0;
    box-shadow: none;
    margin: 0 0;

  }

  .fileContainer .errorsContainer{
    display: none;
  }

  .fileContainer .chooseFileButton{
    margin: 0 0;
    width: '100px';
    height: '100px';
    background-color: white;
    background: 'transparent';
    transition: '0.5s all ease-out';
    color: ${theme.CRA_PURPLE};
  }

  .fileContainer .chooseFileButton:hover{
    color: white;
    box-shadow: ${theme.BOX_SHADOW};
    background: ${theme.PALE_CRA_PURPLE};
  }
`;

export const Button = styled.button`
  display: inline-block;
  border: none;
  padding: 1rem 2rem;
  margin: 0;
  text-decoration: none;
  color: ${theme.CRA_PURPLE};
  font-size: 14px;
  cursor: pointer;
  text-align: center;
  width: 100%;
  height: 100%;
  background: transparent;
  transition: 0.5s all ease-out;
  background-color: #ffffff;
  
  :hover{
    background-color: ${theme.PALE_CRA_PURPLE};
    color: white;
    box-shadow: ${theme.BOX_SHADOW};
  }
`;

export const Title = styled.div`
  height: 3rem;
`;

export const TitleInput = styled.input`
  height: 100%;
  width: 35rem;
  display: block;
  font-size : 1rem;
  padding: 0 0.3rem;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: groove;
  margin-bottom: 1.5rem;
  background-color: ${theme.background};
  ::placeholder {
      color : ${theme.PALE_TEXT};
      font-size : 1rem;
  };
  :focus{
    outline: none;
  }
`;

export const UploadMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`;

export const NotiText = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;
  .tyep-error{
    color:red;
    margin-top: 2rem;
  }
`;

export const ContentWrapper = styled.div`
  width: 35rem;
  margin: 1rem auto;
`;
