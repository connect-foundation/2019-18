import styled from 'styled-components';
import React from 'react';

type submitButtonProps = {
    children : string;
}
const StyledButton = styled.button`
    display: block;
    height: 3rem;
    color: #7cc7c4;
    background-color:#fbe99e;
    cursor: pointer;
    border-radius: 2px;
`;

function SubmitButton({ children }:submitButtonProps) {
  return (
    <StyledButton>
      {children}
    </StyledButton>
  );
}
export default SubmitButton;
