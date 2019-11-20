import styled from 'styled-components';
import React from 'react';

type submitButtonProps = {
    value : string;
}
const StyledButton = styled.button`
    display:block;
    margin: 1rem;
    width: 28rem;
    height: 3rem;
    color: black;
    border: 2px solid red;
    cursor: pointer;
    border-radius: 2px;
`;

function SubmitButton({ value }:submitButtonProps) {
  return (
    <StyledButton>
      {value}
    </StyledButton>
  );
}
export default SubmitButton;
