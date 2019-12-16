import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../../../basics/Button';
import Img from '../../../basics/Img/index';
import { theme } from '../../../style/theme';

export const HeaderRightContainer = styled.div`
    display: flex;
    justify-content: center;
    justify-items: center;
    /* margin-left: auto; */
    margin-right: 5rem;
`;

export const LoginButton = styled(Button)`
    font-size: 0.8rem;
    background-color:${theme.CRA_MINT_FIRST};
`;

export const LoginLink = styled(Link)`
    margin: auto;
    margin-left: 1rem;
    text-decoration : none;
    color: ${theme.background};
`;
export const UploadButton = styled(Button)`
    margin: auto;
    margin-left: 1rem;
    font-size: 0.8rem;
    background-color:${theme.CRA_MINT_FIRST};
`;

export const UploadLink = styled(Link)`
    width: 100%; 
    height: 100%;
    text-decoration : none;
    color: ${theme.background};
`;

export const AlarmImg = styled(Img)`
    margin-left: 1rem;
`;

export const ProfileImg = styled(Img)`
    margin-left: 1rem;
`;
export const LoginContainer = styled.div`
    display: flex;
`;
