import React from 'react';
import styled from 'styled-components';
import Input from '../../../Input';
import Img from '../../../Img';
import Search from '../../../../assets/search.png';

const HeaderSearchContainer = styled.div`
    display: flex;
    width: 15rem;
    height: 2rem;
    border-radius: 100px;
    border: none;
    background: #f3f3f3;
    margin: auto;
`;

const SearchImg = styled(Img)`
    width: 1rem;
    height: 1rem;
    margin: auto 1rem;
`;

const HeaderInput = styled(Input)`
    background: transparent;
    color: #A0A0A0;
`;

const HeaderSearch: React.FC = () => (
  <HeaderSearchContainer>
    <SearchImg src={Search} />
    <HeaderInput />
  </HeaderSearchContainer>
);

export default HeaderSearch;
