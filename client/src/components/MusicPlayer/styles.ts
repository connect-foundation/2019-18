import styled from 'styled-components';
import PauseIcon from '@material-ui/icons/Pause';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { theme } from '../../style/theme';
import Button from '../../basics/Button';
import Span from '../../basics/Span';
import H3 from '../../basics/H3';
import H4 from '../../basics/H4';

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

export const PlayerTitle = styled.div`
    display: flex;
    flex-direction: column;
    pointer-events: none;
    user-select: none;
`;

export const Controller = styled.div`
    display: flex;
    position: absolute;
    right: 0;
    bottom: 0;
`;


export const ControllerItem = styled.div`
    margin-left: 1rem;
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

interface MusicCoverProp{
    src: string;
}

export const MusicCover = styled.img<MusicCoverProp>`
    width: auto;
    height: 100%;
    margin: 0;
    margin-left: auto;
    background-image: ${(props) => props.src};
`;

export {
  PauseIcon,
  PlayArrowIcon,
  RepeatIcon,
};
