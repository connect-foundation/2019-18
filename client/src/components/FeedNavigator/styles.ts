import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme } from '../../style/theme';
import Button from '../../basics/Button';

const rotate = keyframes`
  from {
    transition: font-size: 1rem;
  }

  to {
    transition: font-size: 2rem;
  }
`;

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 4rem;
    justify-content: space-around;

    border-bottom: ${theme.BORDER_GRAY} 1px solid;
`;

export const Navigator = styled.div`
    display: flex;
    width: 30%;
    justify-content: inherit;
    font-weight: ${theme.WEIGHT.STRONG};
`;


export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: black;
    margin: auto 0;
    font-family: "Helvetica Neue",Helvetica,Arial,"나눔고딕",NanumGothic,sans-serif;
    transition: all ease-out 0.5s;
    &.active {
        transform: scale( 1.5 );
    }
`;
export const TabButton = styled.div`
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
