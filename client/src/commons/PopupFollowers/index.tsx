import React, { useState } from 'react';
import * as S from './style';

type PopupProps ={
  text: string,
  closePopup: (e: React.MouseEvent<HTMLButtonElement>)=>void;
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

const PopupFollowers:React.FC<PopupProps> = ({ text, closePopup }) => {
  const [followers, setFollowers] = useState(initialFollowList);

  const toggleFollow = (id:string) => {
    setFollowers(followers.map((value) => {
      if (id === value.id) { return ({ ...value, follow: !value.follow }); }
      return value;
    }));
  };
  const returnToggleFollow = (id:string) => () => {
    toggleFollow(id);
  };

  return (
    <S.Box>
      <S.Inner>
        <S.Header>
          <S.ShortPurpleButton onClick={closePopup}>X</S.ShortPurpleButton>
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
