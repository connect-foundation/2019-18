import React from 'react';
import Popover from '@material-ui/core/Popover';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AlarmImg from '../../assets/alarm.png';
import AlarmColorImg from '../../assets/alarm_color.png';
import Notifications from './Notifications';

import * as S from './styles';

const Alarm: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
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
      <button type="button" onClick={handleClick}>
        <NotificationsIcon fontSize="large" />
      </button>
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
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Notifications />
      </Popover>

      {alarmNum < 10
        ? <S.AlarmNums>{alarmNum}</S.AlarmNums>
        : <S.AlarmOverNums>...</S.AlarmOverNums>}


    </S.AlarmContainer>
  );
};
export default Alarm;
