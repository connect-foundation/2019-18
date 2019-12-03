import styled, { keyframes } from 'styled-components';
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
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;

`;

export const HeaderTitle = styled(H3)`
    font-size: 2rem;
    margin: 0;
`;

export const Player = styled.div`
    position: relative;
    display: flex;
    margin: auto;
    align-items: center;
    width: 100%;
    height: 100%;
    background: none;
    opacity: 1;
`;

export const ControlButton = styled(Button)`
`;

export const PlayerFooter = styled.div`
    display: flex;
    width: 100%;
    height: 5rem;
    border: 1px ${theme.CRA_PURPLE} solid;
    align-items: center;
`;

export const PlayingArea = styled.div`
display: flex;
    width: 100%;
    height: 10rem;
    border: ${theme.BORDER_GRAY} 1px solid;
`;

interface SeekBarProp {
    duration: number;
    curTime: number;
}

// export const SeekBar2 = styled.div.attrs({
//     style: ({duration, curTime}) => ({
//         width: `${((Math.floor(curTime * 10000) / 10000) / (Math.floor(duration * 10000) / 10000)) * 100}%`
//     }),
// })

export const Controller = styled.div`
    display: flex;
    position: absolute;
    right: 0;
    bottom: 0;
`;

export const SeekBar = styled.div.attrs((props:SeekBarProp) => ({
  style: {
    width: `${((Math.floor(props.curTime * 10000) / 10000) / (Math.floor(props.duration * 10000) / 10000)) * 100}%`,
  },
}))<SeekBarProp>`
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;
    height: 100%;
    background: ${theme.BORDER_GRAY};
    opacity: 0.5;
`;

export const TogglePlayButton = styled(Button)`
    width: fit-content;
    height: fit-content;
    background:none;
`;

export const Right = styled.div`
    display: flex;
    margin-left: auto;
`;

export const RightItem = styled.div`
    margin-left: 1rem;
`;

export const PlayerTitle = styled.div`
    display: flex;
    flex-direction: column;
    pointer-events: none;
    user-select: none;
`;

export const Title = styled(H3)`
    margin: 0;
    margin-bottom: 1rem;
`;

export const Author = styled(H4)`
    margin: 0;
`;

export const AudioLength = styled(Span)`
    font-size: 0.8rem;
    margin: 0 1rem;
`;

interface MusicCoverProp {
    src: string;
}
export const MusicCover = styled.img<MusicCoverProp>`
    width: auto;
    height: 100%;
    margin: 0;
    margin-left: auto;
    background-image: ${(props) => props.src};
`;

export const FooterAudioList = styled.div`

`;

export const FooterDl = styled.dl`
    margin-inline-start: 1rem;
`;

export const FooterDt = styled.dt`
    display: inline-block;
    color: #A1A1A1;
`;

export const FooterDd = styled.dd`
    display: inline-block;
    margin-inline-start: 1rem;
`;

export const Repeat = styled(RepeatIcon)`
    
`;
