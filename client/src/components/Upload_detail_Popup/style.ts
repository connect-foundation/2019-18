import styled from 'styled-components';

export const Box = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0,0,0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
`;


export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 27rem;
  height: auto;
  background: white;
  padding: 2rem 1rem;

  label{
    margin-bottom: 1rem;
  }
`;

export const SelectBox = styled.div`
  display: flex;
  flex-direction:column;
  width: 80%;
  span {
    display: block;
    font-weight: 700;
    line-height: 2.3rem;
    text-align: left;
    margin-top: 1.5rem;
  }
`;

export const Radios = styled.div`
  label {
    line-height: 1.5rem;
    margin-right: 1rem;
  }
`;

export const Buttons = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-around;
  margin-top: 1rem;
`;
