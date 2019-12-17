import styled from 'styled-components';
import Img from '../../../basics/Img';
import { theme } from '../../../style/theme';
import H3 from '../../../basics/H3';
import MusicFeedPlayIcon from '../../../assets/MusicFeedPlayIcon.png';

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

export const PlayIcon = MusicFeedPlayIcon;

export const PlayButton = styled.label`
        position: absolute;
        top: 85px;
        right: 135px;
        button{
            width: 50px;
            border: none;
            background: none;
            text-decoration: none;
            img{
                max-width:100%;
                height:auto;
            }
        }
        button:focus {
            outline: none;        }
    
`;
