import React, { useState } from 'react';
import * as S from './style';
import StyledLink from '../../basics/StyledLink';
import PopupFollowers from '../../commons/PopupFollowers';
import { portfolioProp } from './types';

const LOGIN_PROFILE_THUMBNAIL = 'https://kr.object.ncloudstorage.com/crafolio/user/origin/iu-profile-origin.png';


const Portfolio:React.FC<portfolioProp> = ({
  introSimple, introDetail, activeFields, isMyPortfolio,
}) => {
  const follower = 10;
  const following = 100;
  const [showFollowers, setShowFollwers] = useState(false);
  const closePopup = () => { setShowFollwers(false); };
  const showPopup = () => { setShowFollwers(true); };
  return (
    <S.Portfolio>
      {showFollowers && (<PopupFollowers text="aaa" closePopup={closePopup} />)}
      <S.PortfolioBox>
        <S.PortfolioDetail>
          <S.Name>아이유</S.Name>
          <S.FollowLine>
팔로워
            <S.FollowNumber>{follower}</S.FollowNumber>
팔로잉
            <S.FollowNumber>{following}</S.FollowNumber>
          </S.FollowLine>

        </S.PortfolioDetail>
        <S.PortfolioImage src={LOGIN_PROFILE_THUMBNAIL} />
      </S.PortfolioBox>
      <S.IntroduceBox>
        {isMyPortfolio
          ? (
            <StyledLink to="/creator/form">
              <S.LongEmptyButton>
            프로필 수정
              </S.LongEmptyButton>
            </StyledLink>
          )
          : (
            <S.LongEmptyButton onClick={showPopup}>
              팔로우 하기
            </S.LongEmptyButton>
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
