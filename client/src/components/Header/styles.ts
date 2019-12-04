import styled from 'styled-components';
import { theme } from '../../style/theme';

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 4rem;
    justify-content: center;
    justify-items: center;
    border-bottom: 1px ${theme.BORDER_GRAY} solid;
    /* position: relative; */
    position: sticky;
    top: 0;
    background: white;
`;

export const HeaderTitle = styled.div`
  position: absolute;
  width: 10rem;
  display: flex;
  height: 100%;
  margin: auto;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 600;
`;
