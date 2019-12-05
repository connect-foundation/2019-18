import React, { useState, useEffect, useRef } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import { getDefaultWatermarks } from 'istanbul-lib-report';
import useGetFeed from '../hooks/useGetFeed';
import { API_SERVER, FEED_IMAGE_ADD_COMMENT } from '../utils/constants';
import { IData } from '../components/WorksDetail/types';
import WorksDetail from '../components/WorksDetail';
import { Axios } from '../utils';
import { theme } from '../style/theme';
import FeedMyWorks from '../components/FeedMyWorks';
import Portfolio from '../components/Portfolio';

const LOGIN_PROFILE_THUMBNAIL = 'https://kr.object.ncloudstorage.com/crafolio/user/origin/iu-profile-origin.png';

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
};
const CreatorContainer = ({ match }: RouteComponentProps<{id:string}>) => {
  const follower = 10;
  const following = 100;
  const [portfolio, setPortfolio] = useState({ ...initialPortfolio });
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`${API_SERVER}/profile`, {
        method: 'get',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
      });
      const responseJson = await response.json();
      if (!responseJson.success) {
        return null;
      }
      console.log(responseJson.data);
      return responseJson.data;
    };
    getData().then((data:any) => {
      if (data) {
        setPortfolio({
          introDetail: data.introDetail,
          introSimple: data.introSimple,
          activeFields: data.activeFields,
        });
      }
    });
  }, []);
  return (
    <S.CreatorContainer>
      <S.PortfolioContainer>
        <Portfolio
          introDetail={portfolio.introDetail}
          introSimple={portfolio.introSimple}
          activeFields={portfolio.activeFields}
        />
      </S.PortfolioContainer>
      <S.WorksContainer>
        <FeedMyWorks />
      </S.WorksContainer>
    </S.CreatorContainer>
  );
};
export default CreatorContainer;
