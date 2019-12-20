import styled from 'styled-components';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import TextFieldsIcon from '@material-ui/icons/TextFields';

export const Container = styled.div`
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
export const ToolButton = styled.div`
  display: flex;
  cursor: pointer;
  width: fit-content;
  height: auto;
  outline: none;
  border: none;
  margin: auto 0.5rem;
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

export {
  VolumeUpIcon,
  TextFieldsIcon,
};
