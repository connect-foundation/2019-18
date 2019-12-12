import React, { useState, useEffect } from 'react';
import * as S from './style';
import { API_SERVER } from '../../utils/constants';

type PopupProps ={
  closePopup: (e: React.MouseEvent<HTMLButtonElement>)=>void;
  initialFollowList: any,
  text:string,
}
const LOGIN_PROFILE_THUMBNAIL = 'https://kr.object.ncloudstorage.com/crafolio/user/origin/iu-profile-origin.png';

const PopupFollowers:React.FC<PopupProps> = ({ text, closePopup, initialFollowList }) => {
  const [followers, setFollowers] = useState(initialFollowList);
  const followDeleteURL = `${API_SERVER}/follow/Delete`;

  const toggleFollow = (id:string) => {
    setFollowers(followers.map((value:any) => {
      if (id === value.id) { return ({ ...value, follow: !value.follow }); }
      return value;
    }));
  };
  const returnToggleFollow = (id:string) => () => {
    toggleFollow(id);
  };

  const SyncFollowers = (followers:any) => {
    followers.forEach((value:any) => {
      if (!value.follow) {
        fetch(`${followDeleteURL}/${value.id}`, {
          method: 'post',
          credentials: 'include',
          headers: { 'Content-Type': 'application/json' },
        });
      }
    });
  };
  const SyncandClose = (e:React.MouseEvent<HTMLButtonElement>) => {
    SyncFollowers(followers);
    closePopup(e);
  };
  return (
    <S.Box>
      <S.Inner>
        <S.Header>
          <S.ShortPurpleButton onClick={SyncandClose}>X</S.ShortPurpleButton>
        </S.Header>
        <S.SubjectArea>
          <S.Subject>{text}</S.Subject>
        </S.SubjectArea>
        <S.FollowArea>
          { initialFollowList.map(
            (value:any) => (
              <S.FollowMember key={value.id}>
                <S.ProfileImage src={value.thumbnailUrl} />
                <S.FollowName>
                  {value.name}
                </S.FollowName>
                <S.FollowButton value={value.id} onClick={returnToggleFollow(value.id)}>팔로우</S.FollowButton>
              </S.FollowMember>
            ),
          )}
        </S.FollowArea>
      </S.Inner>
    </S.Box>
  );
};

export default PopupFollowers;
