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
    min-height: 10rem;
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
    margin: 1rem;
    background:none;
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

export const Controller = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    right: 0;
    bottom: 0;
`;

export const ControllerItem = styled.div`
    display: flex;
    margin-left: 1rem;
`;

interface MusicCoverProp{
    src: string;
}

export const MusicCover = styled.image<MusicCoverProp>`
    width: 10rem;
    height: 10rem;
    margin: 0;
    margin-left: auto;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: ${(props) => `url(${props.src})`};
    background-position: center center;
`;

export {
  PauseIcon,
  PlayArrowIcon,
  RepeatIcon,
};
