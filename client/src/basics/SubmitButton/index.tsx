import styled from 'styled-components';
import React from 'react';

type submitButtonProps = {
    children : string;
    onClick : (e: React.MouseEvent<HTMLButtonElement>)=>void;
}
const StyledButton = styled.button`
    display:block;
    height: 2.5rem;
    color: #343e7a;
    background-color:#fbe99e;
    cursor: pointer;
    border-color:#fbe99e;
    border-radius: 2px;
    font-weight: bold;
    font-size : 1rem;
`;

function SubmitButton({ children, onClick }:submitButtonProps) {
  return (
    <StyledButton onClick={onClick}>
      {children}
    </StyledButton>
  );
}
export default SubmitButton;
