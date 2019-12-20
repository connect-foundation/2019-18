import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { withRouter, RouteComponentProps } from 'react-router';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { API_SERVER } from '../utils/constants';
import { theme } from '../style/theme';
// import FeedMyWorks from '../components/FeedMyWorks';
import Portfolio from '../components/Portfolio';
import FeedMyWorkContainer from './FeedMyWorkContainer';
import { RootState } from '../modules';


const S = {
  CreatorContainer: styled.div`
    width:100%;
    height:800px;
    display: flex;
  `,
  PortfolioContainer: styled.div`
    width: 30%;
    height: 100%;
    border-right: 1px ${theme.BORDER_GRAY} solid;
  `,
  WorksContainer: styled.div`
    width: 70%;
    height: 100%;
  `,
};
const initialPortfolio = {
  introSimple: '',
  introDetail: '',
  activeFields: [''],
  name: '',
  follower: { following: [''], follower: [''] },
};
interface matchParams {
  Id: string;
}
const CreatorContainer: React.SFC<RouteComponentProps<matchParams>> = ({ match }) => {
  const [portfolio, setPortfolio] = useState({ ...initialPortfolio });
  const { isLogin, id: LoginedId } = useSelector((root:RootState) => root.login);

  const isMyPortfolio = (!match.params.Id);
  const Id = match.params.Id || '';
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`${API_SERVER}/profile/${Id}`, {
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
        const followerObject = {
          following: [...data.profile.following],
          follower: [...data.profile.follower],
        };
        setPortfolio({
          introDetail: data.profile.introDetail,
          introSimple: data.profile.introSimple,
          activeFields: data.profile.activeFields,
          follower: followerObject,
          name: data.name,
        });
      }
    });
  }, [Id]);
  return (!isLogin && !match.params.Id)
    ? (<Redirect to="/" />)
    : (
      <S.CreatorContainer>
        <S.PortfolioContainer>
          <Portfolio
            isMyPortfolio={isMyPortfolio}
            introDetail={portfolio.introDetail}
            introSimple={portfolio.introSimple}
            activeFields={portfolio.activeFields}
            portfolioFollower={portfolio.follower}
            isLogin={isLogin}
            LoginedId={LoginedId}
            PortfolioOwnerId={match.params.Id || LoginedId}
            PortfolioOwnerName={portfolio.name}
          />
        </S.PortfolioContainer>
        <S.WorksContainer>
          <FeedMyWorkContainer id={match.params.Id || LoginedId} />
        </S.WorksContainer>
      </S.CreatorContainer>
    );
};
export default withRouter(CreatorContainer);
