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
`;


export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 420px;
  height: auto;
  background: white;
  padding: 30px 20px;

  label{
    margin-bottom: 10px;
  }
`;

export const SelectBox = styled.div`
  display: flex;
  flex-direction:column;
  width: 370px;
  span {
    display: block;
    font-weight: 700;
    line-height: 37px;
    text-align: left;
    margin-top: 10px;
  }
`;

export const Radios = styled.div`
  label {
    line-height: 30px;
    margin-right: 10px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-around;
  margin-top: 20px;
`;
