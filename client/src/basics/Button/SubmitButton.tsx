import styled from 'styled-components';
import React from 'react';

type submitButtonProps = {
    children : string;
}
const StyledButton = styled.button`
    display:block;
    height: 2.5rem;
    color: #FEFEFE;
    background-color:#93ece9;
    cursor: pointer;
    border-color:#93ece9; 
    border-radius: 2px;
    font-weight: bold;
    font-size : 1rem;
`;

function SubmitButton({ children }:submitButtonProps) {
  return (
    <StyledButton>
      {children}
    </StyledButton>
  );
}
export default SubmitButton;
