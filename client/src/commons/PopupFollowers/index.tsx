import React, { useState, useEffect } from 'react';
import * as S from './style';
import { API_SERVER } from '../../utils/constants';

type PopupProps ={
  text: string,
  closePopup: (e: React.MouseEvent<HTMLButtonElement>)=>void;
  loginedId: string,
}
const LOGIN_PROFILE_THUMBNAIL = 'https://kr.object.ncloudstorage.com/crafolio/user/origin/iu-profile-origin.png';
const initialFollowList = [
  {
    name: 'IU',
    id: 'oid1',
    thumbnailUrl: LOGIN_PROFILE_THUMBNAIL,
    follow: true,
  },
  {
    name: 'IU2',
    id: 'oid2',
    thumbnailUrl: LOGIN_PROFILE_THUMBNAIL,
    follow: true,
  },
  {
    name: 'IU3',
    id: 'oid3',
    thumbnailUrl: LOGIN_PROFILE_THUMBNAIL,
    follow: true,
  },
];

const PopupFollowers:React.FC<PopupProps> = ({ text, closePopup, loginedId }) => {
  const [followers, setFollowers] = useState(initialFollowList);
  const followDeleteURL = `${API_SERVER}/follow/Delete`;

  const toggleFollow = (id:string) => {
    setFollowers(followers.map((value) => {
      if (id === value.id) { return ({ ...value, follow: !value.follow }); }
      return value;
    }));
  };
  const returnToggleFollow = (id:string) => () => {
    toggleFollow(id);
  };

  const SyncFollowers = (followers:any) => {
    followers.forEach((value:any) => {
      console.log(value.follow);
      if (!value.follow) {
        console.log(followDeleteURL);
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
            (value) => (
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
