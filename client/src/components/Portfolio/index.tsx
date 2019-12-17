import React, { useState, useEffect } from 'react';
import * as S from './style';
import StyledLink from '../../basics/StyledLink';
import PopupFollowers from '../../commons/PopupFollowers';
import { portfolioProp } from './types';
import { API_SERVER } from '../../utils/constants';

const LOGIN_PROFILE_THUMBNAIL = 'https://kr.object.ncloudstorage.com/crafolio/user/origin/iu-profile-origin.png';
const follow = (id:string) => {
  fetch(`${API_SERVER}/follow/add/${id}`, {
    method: 'post',
    credentials: 'include',
  });
};
const unfollow = (id:string) => {
  fetch(`${API_SERVER}/follow/delete/${id}`, {
    method: 'post',
    credentials: 'include',
  });
};
const Portfolio:React.FC<portfolioProp> = ({
  introSimple, introDetail, activeFields, isMyPortfolio, PortfolioOwnerId, PortfolioOwnerName, isLogin, LoginedId, portfolioFollower,
}) => {
  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollowings, setShowFollowings] = useState(false);
  const [followable, setFollowable] = useState(false);
  const [myFollower, setMyFollower] = useState({ following: [], follower: [] });
  const closeFollowersPopup = () => { setShowFollowers(false); };
  const showFollowersPopup = () => { setShowFollowers(true); };
  const closeFollowingsPopup = () => { setShowFollowings(false); };
  const showFollowingsPopup = () => { setShowFollowings(true); };
  const onClickFollow = () => {
    if (followable) {
      follow(PortfolioOwnerId);
    } else {
      unfollow(PortfolioOwnerId);
    }
    setFollowable(!followable);
  };

  useEffect(
    () => {
      if (isLogin) {
        const getData = async () => {
          const response = await fetch(`${API_SERVER}/profile/${LoginedId}`, {
            method: 'get',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
          });
          const responseJson = await response.json();
          if (!responseJson.success) {
            return null;
          }
          return responseJson.data;
        };
        getData().then((data:any) => {
          if (data) {
            setMyFollower({
              following: data.profile.following,
              follower: data.profile.follower,
            });
            if (data.profile.following.some((value:any) => (value._id === PortfolioOwnerId))) {
              setFollowable(false);
            } else {
              setFollowable(true);
            }
          }
        });
      }
    }, [isLogin, PortfolioOwnerId, LoginedId],
  );

  return (
    <S.Portfolio>
      {showFollowers && (<PopupFollowers text="팔로워" closePopup={closeFollowersPopup} initialFollowList={portfolioFollower.follower} myFollow={myFollower.following} />)}
      {showFollowings && (<PopupFollowers text="팔로잉" closePopup={closeFollowingsPopup} initialFollowList={portfolioFollower.following} myFollow={myFollower.following} />)}
      <S.PortfolioBox>
        <S.PortfolioDetail>
          <S.Name>{PortfolioOwnerName}</S.Name>
          <S.FollowLine>
팔로워
            <S.FollowNumber onClick={showFollowersPopup}>{portfolioFollower.follower.length}</S.FollowNumber>
팔로잉
            <S.FollowNumber onClick={showFollowingsPopup}>{portfolioFollower.following.length}</S.FollowNumber>
          </S.FollowLine>

        </S.PortfolioDetail>
        <S.PortfolioImage src={LOGIN_PROFILE_THUMBNAIL} />
      </S.PortfolioBox>
      <S.IntroduceBox>
        {isLogin
        && isMyPortfolio
        && (
        <StyledLink to="/creator/form">
          <S.LongEmptyButton>
            프로필 수정
          </S.LongEmptyButton>
        </StyledLink>
        )}
        {isLogin
         && !isMyPortfolio
         && (followable
           ? (
             <S.LongEmptyButton onClick={onClickFollow}>
              팔로우
             </S.LongEmptyButton>
           )
           : (
             <S.RedLongEmptyButton onClick={onClickFollow}>
              언팔로우
             </S.RedLongEmptyButton>
           )
         )}
        <S.Subject>한줄소개</S.Subject>
        <S.Content>
          {introSimple}
        </S.Content>
        <S.Subject>활동분야</S.Subject>
        <S.Content>
          {activeFields && activeFields.join(', ')}
        </S.Content>
        <S.Subject>프로필</S.Subject>
        <S.Content>
          {introDetail}
        </S.Content>
      </S.IntroduceBox>
    </S.Portfolio>
  );
};
export default Portfolio;
