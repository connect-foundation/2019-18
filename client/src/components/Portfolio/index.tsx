import React, { useState, useEffect } from 'react';
import * as S from './style';
import StyledLink from '../../basics/StyledLink';
import PopupFollowers from '../../commons/PopupFollowers';
import { portfolioProp } from './types';
import { API_SERVER } from '../../utils/constants';

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

const follow = (id:string) => {
  console.log('fetch');
  console.log(id);
  fetch(`${API_SERVER}/follow/add/${id}`, {
    method: 'post',
    credentials: 'include',
  });
};
const unfollow = (id:string) => {
  console.log('fetch');
  fetch(`${API_SERVER}/follow/delete/${id}`, {
    method: 'post',
    credentials: 'include',
  });
};
const Portfolio:React.FC<portfolioProp> = ({
  introSimple, introDetail, activeFields, isMyPortfolio, PortfolioOwnerId, isLogin, LoginedId, portfolioFollower,
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
    follow(PortfolioOwnerId);
  };

  useEffect(
    () => {
      if (isLogin && !isMyPortfolio) {
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
          }
        });
      }
    }, [isLogin, PortfolioOwnerId, LoginedId],
  );
  console.log('myfollower');
  console.log(myFollower);
  console.log('portfolioFollower');
  console.log(portfolioFollower);
  return (
    <S.Portfolio>
      {showFollowers && (<PopupFollowers text="팔로워" closePopup={closeFollowersPopup} initialFollowList={initialFollowList} />)}
      {showFollowings && (<PopupFollowers text="팔로잉" closePopup={closeFollowingsPopup} initialFollowList={initialFollowList} />)}
      <S.PortfolioBox>
        <S.PortfolioDetail>
          <S.Name>아이유</S.Name>
          <S.FollowLine>
팔로워
            <S.FollowNumber onClick={showFollowersPopup}>{10}</S.FollowNumber>
팔로잉
            <S.FollowNumber onClick={showFollowingsPopup}>{100}</S.FollowNumber>
          </S.FollowLine>

        </S.PortfolioDetail>
        <S.PortfolioImage src={LOGIN_PROFILE_THUMBNAIL} />
      </S.PortfolioBox>
      <S.IntroduceBox>
        {isLogin
        && (isMyPortfolio
          ? (
            <StyledLink to="/creator/form">
              <S.LongEmptyButton>
            프로필 수정
              </S.LongEmptyButton>
            </StyledLink>
          )
          : (
            <S.LongEmptyButton onClick={onClickFollow}>
              팔로우 하기
            </S.LongEmptyButton>
          ))}
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
