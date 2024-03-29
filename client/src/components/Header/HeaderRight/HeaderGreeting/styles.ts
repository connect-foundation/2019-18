
import styled from 'styled-components';
import Img from '../../../../basics/Img';
import Input from '../../../../basics/Input';

export const HeaderSearchContainer = styled.div`
    display: flex;
    width: 15rem;
    height: 2rem;
    border-radius: 100px;
    border: none;
    background: #f3f3f3;
    margin: auto;
`;

export const SearchImg = styled(Img)`
    width: 1rem;
    height: 1rem;
    margin: auto 1rem;
`;

export const HeaderInput = styled(Input)`
    background: transparent;
    /* color: #dddddd; */
`;
