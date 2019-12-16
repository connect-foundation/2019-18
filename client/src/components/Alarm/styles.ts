import styled from 'styled-components';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Img from '../../basics/Img/index';
import { theme } from '../../style/theme';

export const useStyles = makeStyles((materialTheme: Theme) => createStyles({
  paper: {
    background: theme.background,
  },
}));

export const Alarm = styled(Img)`
    height: 2.5rem;
    width: 2.5rem;
    position: absolute;
    top: 10px;
`;

export const AlarmContainer = styled.div`
    position: relative;
    margin-right:20px;

`;

export const AlarmNums = styled.div`
    padding: 4px;
    border-radius: 20px;
    color : ${theme.CRA_PURPLE};
    position: absolute;
    background-color: ${theme.CRA_YELLOW};
    top: 32px;
    left: 28px;
`;

export const AlarmOverNums = styled.div`

    padding:0px 5px; 
    padding-bottom:5px;
    border-radius: 20px;
    color : ${theme.CRA_PURPLE};
    position: absolute;
    background-color: ${theme.CRA_YELLOW};
    font-weight: bold;
    top: 32px;
    left: 28px;
`;

export const AlarmWrapper = styled.button`
    display: hidden;
`;
