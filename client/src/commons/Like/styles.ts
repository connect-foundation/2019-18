import styled from 'styled-components';
import { theme } from '../../style/theme';

export const Container = styled.div`
    border: 1px solid ${theme.BORDER_GRAY};
    display: flex;
    width: 3rem;
    height: fit-content;
    justify-content: center;
    align-items: center;
`;
