import styled from 'styled-components';

export const customButton = {
  color: 'white',
  width: '100px',
  height: '100px',
  fontSize: '16px',
  borderRadius: '2px',
  backgroundColor: 'palevioletred',
  fontWeight: '400',
};

export const customFileContainer = {
  border: '2px solid palevioletred',
};

export const SeleteBox = styled.div`
  border: 2px solid blue;
  width: 600px;
  height: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Box = styled.div`
  border: 2px solid red;
  width: 100px;
  height: 100px;
  .fileContainer{
    padding: 0 0;
    box-shadow: none;
    margin: 0 0;
  }

  .fileContainer .chooseFileButton{
    margin: 0 0;
  }
`;

export const Button = styled.button`
display: inline-block;
border: none;
padding: 1rem 2rem;
margin: 0;
text-decoration: none;
background: palevioletred;
color: #ffffff;
font-size: 16px;
cursor: pointer;
text-align: center;
width: 100%;
height: 100%;
`;
