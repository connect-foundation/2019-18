import styled from 'styled-components';
import { theme } from '../../../style/theme';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  align-items: center;
`;

export const FooterDl = styled.dl`
  margin-inline-start: 1rem;
`;

export const FooterDt = styled.dt`
  display: inline-block;
  color: ${theme.AMERICAN_RIVER};
`;

export const FooterDd = styled.dd`
  display: inline-block;
  margin-inline-start: 1rem;
`;

export const FooterAudioList = styled.div``;
