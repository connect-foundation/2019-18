import styled from 'styled-components';
import { theme } from '../../style/theme';

export const LinkBox = styled.div`
    display: flex;
    flex-direction: row;
    width: 800px;
    height: 200px;
    align-items: center;
    justify-content: center;
    /* border: 2px solid palevioletred; */

    a {
        text-decoration: none;
        margin-right: 20px;
        margin-left: 20px;
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
    /* border: 2px solid red; */
    font-size: 12px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    background: ${theme.WARN_GRAY};
    padding: 15px 20px;

    span {
        color: ${theme.AMERICAN_RIVER};
        margin-top: 5px;
        margin-left: 5px;
        margin-right: 15px;
        img {
            width: 40px;
            height: auto;
        }
    }
`;
