import React from 'react';
import * as S from './styles';
import { getTimeSimple } from '../../../utils';
import { ISender, IRef } from '../../../modules/notification';

interface NotificationItemProp {
  sender: ISender;
  type: string;
  createdAt: number;
  refPost: IRef;
}

const NotificationItem: React.FC<NotificationItemProp> = ({
  sender, type, createdAt, refPost,
}) => {
  const getRefAddr = () => {
    if (type === 'works' || type === 'wallpapers') {
      return `/home/detail-image/${refPost._id}`;
    }
    return `/home/detail-music/${refPost._id}`;
  };

  return (
    <S.Container>
      <S.Thumbnail src={sender.thumbnailUrl} />
      <S.ContentWrapper>
        <S.Content>
          <S.Strong to={`/creator/${sender._id}`}>
            {sender.name}
          </S.Strong>
        님이 새로운 &nbsp;
          <S.Strong to={getRefAddr()}>
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
};

export default NotificationItem;
