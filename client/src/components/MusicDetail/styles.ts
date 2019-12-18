import styled from 'styled-components';
import RepeatIcon from '@material-ui/icons/Repeat';
import { theme } from '../../style/theme';
import Button from '../../basics/Button';
import H3 from '../../basics/H3';
import H4 from '../../basics/H4';
import Span from '../../basics/Span';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 60%;
    background: none;
    margin: auto;
    margin-top: 3rem;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
`;

export const HeaderTitle = styled(H3)`
    font-size: 2rem;
    margin: 0;
`;


export const Strong = styled(Span)`
    font-weight: ${theme.WEIGHT.STRONG};
    color: black;
`;

export const HeaderMeta = styled(Span)`
    font-size: 1rem;
    font-weight: ${theme.WEIGHT.MEDIUM};
    margin: 1rem 0;
    color: ${theme.AMERICAN_RIVER};
`;


export const PlayerFooter = styled.div`
    display: flex;
    width: 100%;
    height: fit-content;
    align-items: center;
`;


export const FooterAudioList = styled.div``;

export const FooterDl = styled.dl`
    margin-inline-start: 1rem;
`;

export const FooterDt = styled.dt`
    display: inline-block;
    color: ${theme.AMERICAN_RIVER};
`;

export const FooterDd = styled.dd`
    display: inline-block;
    margin-inline-start: 1rem;
`;

export const CopyRight = styled.div`
    margin: 5rem 0;
    color: ${theme.AMERICAN_RIVER};
`;
