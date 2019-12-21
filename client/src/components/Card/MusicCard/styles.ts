import styled from 'styled-components';
import { PlayArrow, Pause } from '@material-ui/icons';
import Img from '../../../basics/Img';
import { theme } from '../../../style/theme';
import H3 from '../../../basics/H3';
import Link from '../../../basics/StyledLink';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 20rem;
    height: fit-content;
    margin: 1rem;
    border-radius: 10px;
    border: 0px solid black;
    box-shadow: ${theme.BOX_SHADOW};
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease-in-out;
    &:hover {
        transition: all 0.3s ease-in-out;
        transform: scale(1.1);
    }
`;

export const CardImgContainer = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 13rem;
    overflow: hidden;
`;

export const CardImg = styled(Img)`
    display: flex;
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin-bottom: auto;
    border-top-left-radius:10px;
    border-top-right-radius: 10px;
    background: no-repeat;
    filter: blur(10px) grayscale(30%);
    
`;

export const CardHeader = styled.div`
    padding: 0 1rem;
    margin-top: 1rem;
`;

export const Title = styled(H3)`
    margin: 0;
`;

export const CardBody = styled.div`
    display: flex;
    padding: 0 1rem;
    border-bottom: 1px ${theme.BORDER_GRAY} solid;
`;

export const CroppedCardImg = styled(Img)`
    position: absolute;
    top: 55px;
    right: 110px;
    width: 100px;
    height: 100px;
    object-fit: cover;
    box-shadow: ${theme.BOX_SHADOW_BOTTOM};
    filter: grayscale(10%);
`;

export const PlayButton = styled.label`
    position: absolute;
    top: 80px;
    right: 116px;
    cursor: pointer;
`;

export const InnerPlayButton = styled.button`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 90px;
    border: none;
    background: none;
    text-decoration: none;
    color: white;
    cursor: pointer;
    .MuiSvgIcon-root {
        font-size: 3rem;
    }
    &:focus {
        outline: none;
    };
`;

export const StyledLink = styled(Link)`
    width: 100%;
    height: 100%;
`;

export {
  PlayArrow,
  Pause,
};
