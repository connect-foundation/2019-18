import styled from 'styled-components';
import Img from '../../basics/Img';
import { theme } from '../../style/theme';

export const PortfolioForm = styled.div`
    flex:1;
    display: flex;
    background-color: ${theme.WARN_GRAY};
`;
export const InputContainer = styled.div`
    background-color: white;
    margin: 0 auto;
    margin-top: 40px;
    margin-bottom: 80px;
    padding: 40px 0;
    width: 900px;
    border: 1px ${theme.BORDER_GRAY} solid;
    display:flex;
    flex-direction: column;
`;
export const InputArea = styled.div`
    margin: 0 auto;
    padding: 10px;
    width: 500px; 
    display: flex;
`;
export const InputTitle = styled.div`
    width: 20%;
    font-size: 14px;
    font-weight: bold;
    padding: 6px 0 0 10px;
`;
export const InputTextArea = styled.div`
    width: 80%;
    border: 1px ${theme.BORDER_GRAY} solid;
    padding: 2px;
    height: 70px;
`;
export const InputSelectArea = styled.div`
    width: 80%;
    border: 1px ${theme.BORDER_GRAY} solid;
    height: 30px;
    display: flex;
    justify-content: space-between;
`;
export const SelectedValue = styled.div`
    color : ${theme.PALE_TEXT};
    height: 30px;
    font-size : 14px;
    line-height: 30px;
`;
export const BelowTriangle = styled.img`
    display:block;
    height: 30px;
    width: 30px;
    background-size:cover;
    background-position: center center;
`;
export const LongInputTextArea = styled.div`
    width: 80%;
    border: 1px ${theme.BORDER_GRAY} solid;
    height: 200px;
`;
export const PortfolioFormBox = styled.div`
    border: 1px black solid;
`;
