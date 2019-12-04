import React from 'react';
import ReverseButton from '../../basics/ReverseButton';
import * as S from './style';
import StyledLink from '../../basics/StyledLink';

const LOGIN_PROFILE_THUMBNAIL = 'https://kr.object.ncloudstorage.com/crafolio/user/origin/iu-profile-origin.png';

const Portfolio = () => {
  const follower = 10;
  const following = 100;
  return (
    <S.Portfolio>
      <S.PortfolioBox>
        <S.PortfolioDetail>
          <S.Name>아이유</S.Name>
          <S.FollowLine>
팔로워
            <S.FollowNumber>{follower}</S.FollowNumber>
팔로잉
            <S.FollowNumber>{following}</S.FollowNumber>
          </S.FollowLine>
          <StyledLink to="/creator/form">
            <ReverseButton>
            프로필 수정
            </ReverseButton>
          </StyledLink>
        </S.PortfolioDetail>
        <S.PortfolioImage src={LOGIN_PROFILE_THUMBNAIL} />
      </S.PortfolioBox>
      <S.IntroduceBox>
        <S.Subject>한줄소개</S.Subject>
        <S.Content>
                한줄소개
        </S.Content>
        <S.Subject>활동분야</S.Subject>
        <S.Content>
                활동분야
        </S.Content>
        <S.Subject>프로필</S.Subject>
        <S.Content>
               상세소개입니다.
        </S.Content>
      </S.IntroduceBox>
    </S.Portfolio>
  );
};
export default Portfolio;