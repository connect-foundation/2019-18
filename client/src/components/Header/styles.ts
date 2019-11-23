import styled from 'styled-components';
import { theme } from '../../style/theme';

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 4rem;
    justify-content: center;
    justify-items: center;
    border-bottom: 1px ${theme.BORDER_GRAY} solid;
`;
