import React from 'react';
import styled from 'styled-components';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';

const HeaderContainer= styled.div`
    display: flex;
    flex-direction: row;
    height: 5rem;
    justify-content: center;
    justify-items: center;
    border-bottom: 1px #DDDDDD solid;
`;


const Header: React.FC = ()=>{
    return (
      <HeaderContainer>
        <HeaderLeft/>
        <HeaderRight/>
      </HeaderContainer>
    )
}

export default Header;