import styled from 'styled-components';
import { theme } from '../../style/theme';
import Button from '../../basics/Button';

export const FeedNavigatorContainer = styled.div`
    display: flex;
    width: 100%;
    height: 4rem;
    justify-content: center;
    justify-items: center;
    border-bottom: ${theme.BORDER_GRAY} 1px solid;
`;

export const TabButton = styled(Button)`
    border: none;
    background: white;
    width: 7rem;
    height: 3rem;
    padding: none;
    margin: auto 0;
    font-size: 1rem;
    text-decoration: none;
    color: black;
    outline: none;
`;
