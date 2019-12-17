import styled from 'styled-components';
import { theme } from '../../style/theme';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const FeedWrapper = styled.div`
    display: flex;
    flex-flow: wrap;
    justify-content: space-around;
    width: 80%;
    margin: auto;
`;

export const Progress = styled.div`
    margin: auto auto;
    margin-top: 20px;
    color: ${theme.BORDER_GRAY};
`;
