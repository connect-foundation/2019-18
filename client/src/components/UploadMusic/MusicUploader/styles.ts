import styled from 'styled-components';
import { ArrowDropDown, PlayCircleOutline } from '@material-ui/icons';
import { theme } from '../../../style/theme';

export const Container = styled.div`
  display: flex;
  width: auto;
  height: 15rem;
  min-height: 10rem;
  max-height: 20rem;
  background: white;
  padding: 1rem;
`;

export const AlbumCoverWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 10rem;
  height: 100%;
  background: red;
`;

export const CoverImage = styled.img`
  src: ${(props) => props.src};
  /* width: 5rem;
  height: 7rem; */
  background: blue;
  width: 100%;
  height: 100%;
`;

export const CoverImageSelect = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 10rem;
  background: yellow;
`;

export const CoverImageWrapper = styled.div`
  display: flex;
  width: 10rem;
  flex:1;
`;


export const CoverImageLabel = styled.label`
  font-size: 0.5rem;
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

export const CoverImageInput = styled.input`
  width: 10rem;
  height: 20rem;
`;

export const Detail = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
`;

export const Span = styled.span`
  display: flex;
  justify-content: center;
  width: fit-content;
  min-width: 3rem;
  background: green;

`;

export const TitleInput = styled.input`
  width: 100%;
  height: 1.5rem;
  outline: none;
`;

export const DetailButtonWrapper = styled.div`
  display: flex;
  position: relative;
  background: lightblue;
  width: 100%;
  height: fit-content;
`;

export const DetailSelector = styled.div`
  position: absolute;
  display: flex;
  width: 20rem;
  height: 5rem;
  top:100%;
  left: 0;
  z-index: 10;
  background: lightgrey;
`;

export const DetailButton = styled.button`
  background: white;  
  width: 100%;
  height: 1.5rem;
  
  display: flex;
  justify-content: space-between;
  line-height: 20px;

  text-align: start;
  outline: none;
  cursor: pointer;
`;

export const DetailWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  flex-direction: column;
  background: purple;
  margin: auto 1rem;
`;

export {
  ArrowDropDown,
  PlayCircleOutline,
};
