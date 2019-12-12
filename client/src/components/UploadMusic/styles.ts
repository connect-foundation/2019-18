import styled from 'styled-components';
import ImageIcon from '@material-ui/icons/Image';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import { theme } from '../../style/theme';

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

export const AddButtonList = styled.div`
  display: flex;
  width: fit-content;
  margin: 1rem auto;
  justify-content: space-around;
`;

interface LabelProp {
  htmlFor?:string;
}

export const Label = styled.label<LabelProp>`
  cursor: pointer;
`;
export const Button = styled.div`
  display: flex;
  cursor: pointer;
  width: fit-content;
  height: auto;

  outline: none;
  border: none;

  margin: auto 0.5rem;
`;

export const ButtonWrapper = styled.div`

`;

export const Span = styled.span`
  overflow: hidden;
  width: 2rem;
  height: 1rem;

`;

export const Input = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;


export const UploadButton = styled.button`
  width: 5rem;
  height: 3rem;
  background: ${theme.CRA_PURPLE};
  color: white;
  outline: none;
  cursor: pointer;
  margin: auto;
  width: 10rem;
  height: 10rem;
`;

export {
  ImageIcon,
  VolumeUpIcon,
  TextFieldsIcon,
};
