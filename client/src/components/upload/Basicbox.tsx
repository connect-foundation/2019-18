import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  font-size: 13px;
  color: palevioletred;
  width: 100%;
  height: 100%;
  background: transparent;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: palevioletred;
    color: white;
  }
`;

const Box = styled.div`
border: solid 1px #dde1e5; 
width: 130px;
height: 130px;
display: flex;
border-radius: 1px;
`;

type BasicboxProps = {
    name: string,
}

function Basicbox({
  name,
}: BasicboxProps) {
  return (
    <Box className="Basicbox">
      <Button type="button">{name}</Button>
    </Box>
  );
}

export default Basicbox;
