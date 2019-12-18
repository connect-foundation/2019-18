import React, { useState, useEffect } from 'react';
import Popover from '@material-ui/core/Popover';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Notifications from './Notifications';
import { INoti } from '../../modules/notification';
import * as S from './styles';

interface AlarmProp {
  notifications: INoti[];
  alarmRef: React.RefObject<HTMLButtonElement>;
  notiNum: number;
}
const Alarm: React.FC<AlarmProp> = ({
  notifications,
  alarmRef,
  notiNum,
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

  return (
    <S.AlarmContainer>
      <S.AlarmWrapper
        type="button"
        onClick={handleClick}
        ref={alarmRef}
      >
        <NotificationsIcon fontSize="large" />
      </S.AlarmWrapper>

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

      <S.AlarmNums>
        {notiNum < 100
          ? notiNum
          : '99+'}
      </S.AlarmNums>

    </S.AlarmContainer>
  );
};
export default Alarm;
