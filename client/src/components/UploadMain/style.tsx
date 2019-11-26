import styled from 'styled-components';
import { theme } from '../../style/theme';

export const LinkBox = styled.div`
    display: flex;
    flex-direction: row;
    width: 800px;
    height: 200px;
    align-items: center;
    justify-content: space-around;
    border: 2px solid palevioletred;

    a {
        text-decoration: none;
    }
`;

export const Title = styled.div`
    padding-left: 12px;
    font-size: 18px;
    margin: 210px auto 0 auto;
`;

export const UploadMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 800px;
`;

export const Warn = styled.div`
    border: 2px solid red;
    font-size: 15px;
    margin-top: 20px;
`;
