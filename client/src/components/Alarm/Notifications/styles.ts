import styled from 'styled-components';
import { theme } from '../../../style/theme';
import TextWithImg from '../../../commons/TextWithImg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  height: 20rem;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  height: 3rem;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-weight: ${theme.WEIGHT.STRONG};
`;

export { TextWithImg };
