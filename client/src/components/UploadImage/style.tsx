import styled from 'styled-components';
import { theme } from '../../style/theme';

export const customButton = {
  width: '100px',
  height: '100px',
  fontSize: '16px',
  borderRadius: '2px',
  fontWeight: '400',
};

export const customFileContainer = {
  border: '2px solid palevioletred',
};

export const SeleteBox = styled.div`
  border: 2px solid blue;
  width: 600px;
  height: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
`;

export const Box = styled.div`
  border: 2px solid red;
  width: 100px;
  height: 100px;
  .fileContainer{
    padding: 0 0;
    box-shadow: none;
    margin: 0 0;
  }

  .fileContainer .chooseFileButton{
    margin: 0 0;
  }

  .fileContainer .errorsContainer{
    display: none;
  }

  .fileContainer .chooseFileButton{
    background: #FFFFFF;
    color: ${theme.DRACULA_ORCHID};
  }

  .fileContainer .chooseFileButton:hover{
    background: ${theme.SMOOTHING_BREEZE};
  }
`;

export const Button = styled.button`
  display: inline-block;
  border: none;
  padding: 1rem 2rem;
  margin: 0;
  text-decoration: none;
  color: ${theme.DRACULA_ORCHID};
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  width: 100%;
  height: 100%;
  
  
  :hover{
    background: ${theme.SMOOTHING_BREEZE};
  }
`;

export const Title = styled.div`
  height: 60px;
`;

export const TitleInput = styled.input`
  height: 100%;
  width: 750px;
  display: block;
  font-size : 20px;
  padding: 0 0.3rem;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: groove;
  margin-bottom: 30px;
  ::placeholder {
      color : ${theme.PALE_TEXT};
      font-size : 20px;
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

export const UploadButton = styled.button`
  display: inline-block;
  border: none;
  margin: 0;
  margin-top: 10px;
  text-decoration: none;
  background: ${theme.CRA_PURPLE};
  color: #ffffff;
  font-size: 13px;
  cursor: pointer;
  text-align: center;
  width: 180px;
  height: 40px;

  :hover{
    background: ${theme.PALE_CRA_PURPLE};
  }

`;
