import styled from 'styled-components';

export const Button = styled.button`
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

export const Box = styled.div`
border: solid 1px #dde1e5; 
width: 130px;
height: 130px;
display: flex;
border-radius: 1px;
`;
 