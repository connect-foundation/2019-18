import styled from 'styled-components';
import ImageIcon from '@material-ui/icons/Image';
import { theme } from '../../style/theme';
import Button from '../../basics/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  background: ${theme.BOX_SHADOW_BOTTOM};
  justify-content: center;
  margin: auto;
`;

export const TitleInput = styled.input`
  display: flex;
  height: 100%;
  width: 750px;
  display: block;
  font-size : 20px;
  padding: 0 0.3rem;
  border: none;
  background: ${theme.background};
  border-bottom: 1px solid ${theme.BORDER_GRAY};
  padding: 1rem 0;
  margin: auto;

  ::placeholder {
      color : ${theme.PALE_TEXT};
      font-size : 20px;
  };
  :focus{
    outline: none;
  }
`;

export const ContentWrapper = styled.div`
  width: 750px;
  margin: 1rem auto;
`;

export const ButtonWrapper = styled.div`

`;

export const Span = styled.span`
  overflow: hidden;
  width: 2rem;
  height: 1rem;

`;


export const UploadButton = styled(Button)`
    width: 11rem;
    height: 2.5rem;
  background: ${theme.CRA_PURPLE};
  color: white;
  outline: none;
  cursor: pointer;
  margin: auto;
  border-radius: 0;
`;

export {
  ImageIcon,
};
