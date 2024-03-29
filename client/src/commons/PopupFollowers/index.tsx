import React, { useState, useEffect } from 'react';
import * as S from './style';
import { API_SERVER } from '../../utils/constants';

type PopupProps ={
  closePopup: (e: React.MouseEvent<HTMLButtonElement>)=>void;
  initialFollowList: any,
  myFollow: any,
  text:string,
}
const LOGIN_PROFILE_THUMBNAIL = 'https://kr.object.ncloudstorage.com/crafolio/user/origin/iu-profile-origin.png';

const PopupFollowers:React.FC<PopupProps> = ({
  text, closePopup, initialFollowList, myFollow,
}) => {
  const [followers, setFollowers] = useState(initialFollowList);
  const followDeleteURL = `${API_SERVER}/follow/delete`;
  const followAddURL = `${API_SERVER}/follow/add`;

  useEffect(() => {
    setFollowers(initialFollowList.map((initF:any) => {
      if (myFollow.some((myF:any) => (myF._id === initF._id))) {
        return { ...initF, follow: true, originFollow: true };
      }
      return { ...initF, follow: false, originFollow: false };
    }));
  }, []);
  const toggleFollow = (id:string) => {
    setFollowers(followers.map((value:any) => {
      if (id === value._id) { return ({ ...value, follow: !value.follow }); }
      return value;
    }));
  };
  const returnToggleFollow = (id:string) => () => {
    toggleFollow(id);
  };

  const SyncFollowers = async (followers:any) => {
    followers.reduce(async (acc:any, value:any) => {
      await acc;
      if (value.follow !== value.originFollow) {
        const callURL = value.follow ? followAddURL : followDeleteURL;
        await fetch(`${callURL}/${value._id}`, {
          method: 'post',
          credentials: 'include',
          headers: { 'Content-Type': 'application/json' },
        });
      }
      return acc;
    }, []);
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
          { followers.map(
            (value:any) => (
              <S.FollowMember key={value._id}>
                <S.ProfileImage src={value.thumbnailUrl} />
                <S.FollowName>
                  {value.name}
                </S.FollowName>
                {value.follow
                  ? <S.UnFollowButton value={value._id} onClick={returnToggleFollow(value._id)}>언팔로우</S.UnFollowButton>
                  : <S.FollowButton value={value._id} onClick={returnToggleFollow(value._id)}>팔로우</S.FollowButton>}
              </S.FollowMember>
            ),
          )}
        </S.FollowArea>
      </S.Inner>
    </S.Box>
  );
};

export default PopupFollowers;
