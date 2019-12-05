import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../../../basics/Button';
import Img from '../../../basics/Img/index';

export const HeaderRightContainer = styled.div`
    display: flex;
    justify-content: center;
    justify-items: center;
    /* margin-left: auto; */
    margin-right: 5rem;
`;

export const LoginButton = styled(Button)`
    margin: auto;
    margin-left: 1rem;
    font-size: 0.8rem;
`;

export const LoginLink = styled(Link)`
    width: 100%; 
    height: 100%;
    text-decoration : none;
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

export const UploadButton = styled(Button)`
    display: flex;
    margin: auto;
`;
