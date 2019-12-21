import styled from 'styled-components';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Img from '../../../basics/Img';
import { theme } from '../../../style/theme';
import H3 from '../../../basics/H3';
import StyledLink from '../../../basics/StyledLink';

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
`;

export const CardImgContainer = styled.div`
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
    filter: blur(30px) grayscale(30%);
    
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

export const PlayIcon = PlayArrowIcon;

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
        button{
            width: 90px;
            border: none;
            background: none;
            text-decoration: none;
            color: white;
            .MuiSvgIcon-root {
                font-size: 3rem;
            }
        }
        button:focus {
            outline: none;        }
    
`;

export {
  StyledLink,
};
