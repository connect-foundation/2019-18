import React, { useState } from 'react';
import Popover from '@material-ui/core/Popover';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import AlarmImg from '../../assets/alarm.png';
import AlarmColorImg from '../../assets/alarm_color.png';
import Notifications from './Notifications';
import { INoti } from '../../modules/notification';
import * as S from './styles';

interface AlarmProp {
  notifications: INoti[];
}
const Alarm: React.FC<AlarmProp> = ({
  notifications,
}) => {
  const classes = S.useStyles();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(
    null,
  );
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const alarmNum = 5;
  const img = alarmNum > 0 ? AlarmColorImg : AlarmImg;

  return (
    <S.AlarmContainer>
      <S.AlarmWrapper type="button" onClick={handleClick}>
        <NotificationsIcon fontSize="large" />
      </S.AlarmWrapper>
      {/* <button type="button" onClick={handleClick}>
        <S.Alarm src={img} />
      </button> */}

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        classes={{
          paper: classes.paper,
        }}
      >
        <Notifications
          notifications={notifications}
        />
      </Popover>

      {alarmNum < 10
        ? <S.AlarmNums>{alarmNum}</S.AlarmNums>
        : <S.AlarmOverNums>...</S.AlarmOverNums>}


    </S.AlarmContainer>
  );
};
export default Alarm;
