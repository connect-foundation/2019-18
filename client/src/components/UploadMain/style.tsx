import styled from 'styled-components';
import { theme } from '../../style/theme';

export const LinkBox = styled.div`
    display: flex;
    flex-direction: row;
    width: 25rem;
    height: 10rem;
    align-items: center;
    justify-content: center;

    a {
        text-decoration: none;
        margin-right: 1rem;
        margin-left: 1rem;
    }
`;

export const Title = styled.div`
    padding-left: 1rem;
    font-size: 1rem;
    margin: 10rem auto 0 auto;
`;

export const UploadMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 40rem;
`;

export const Warn = styled.div`
    font-size: 0.8rem;
    margin-top: 6rem;
    display: flex;
    align-items: center;
    background: ${theme.WARN_GRAY};
    padding: 0.8rem 1rem;

    span {
        color: ${theme.AMERICAN_RIVER};
        margin-top: 0.25rem;
        margin-left: 0.25rem;
        margin-right: 1.2rem;
        img {
            width: 2.3rem;
            height: auto;
        }
    }
`;
