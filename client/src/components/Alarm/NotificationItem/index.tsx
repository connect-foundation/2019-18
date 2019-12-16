import React from 'react';
import * as S from './styles';
import { getTimeSimple } from '../../../utils';

interface NotificationItemProp {
  sender: any;
  type: string;
  createdAt: number;
}

const NotificationItem: React.FC<NotificationItemProp> = ({
  sender, type, createdAt,
}) => (
  <S.Container>
    <S.Thumbnail src={sender.thumbnailUrl} />
    <S.ContentWrapper>
      <S.Content>
        <S.Strong to="/">
          {sender.name}
        </S.Strong>
        님이 새로운
        <S.Strong to="/">
          {type}
        </S.Strong>
        을 업로드 하였습니다. 지금 감상해보세요!
      </S.Content>
      <S.Time>
        {getTimeSimple(createdAt)}
      </S.Time>
    </S.ContentWrapper>
  </S.Container>
);

export default NotificationItem;
