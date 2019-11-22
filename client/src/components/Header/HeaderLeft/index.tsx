import React from 'react';
import styled from 'styled-components';
import logo from '../../../assets/logo.png';
import Img from '../../../basics/Img';

const HeaderLeftContainer = styled.div`
    margin: auto;
    margin-right: auto;
    margin-left: 5rem;
`;

const LogoImg = styled(Img)`
    width: 3rem;
    height: 3rem;
`;

const HeaderLeft: React.FC = () => (
  <HeaderLeftContainer>
    <LogoImg src={logo} />
  </HeaderLeftContainer>
);

export default HeaderLeft;
