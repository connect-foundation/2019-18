import React from 'react';
import AlarmImg from '../../assets/alarm.png';
import AlarmColorImg from '../../assets/alarm_color.png';
import * as S from './styles';

const Alarm: React.FC = () => {
  const alarmNum = 5;
  const img = alarmNum > 0 ? AlarmColorImg : AlarmImg;


  return (
    <S.AlarmContainer>
      <S.Alarm src={img} />
      {alarmNum < 10
        ? <S.AlarmNums>{alarmNum}</S.AlarmNums>
        : <S.AlarmOverNums>...</S.AlarmOverNums>}
    </S.AlarmContainer>
  );
};
export default Alarm;
