import React, { useState, useEffect, useRef } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
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
const CreatorContainer = ({ match }: RouteComponentProps<{id:string}>) => {
  const follower = 10;
  const following = 100;
  //   const { id } = match.params;
  //   const [{
  //     data, setData, isLoading, isError,
  //   }, setUrl] = useGetFeed<IData | null>(null);

  //   const commentRef = useRef<HTMLTextAreaElement>(null);
  //   const [inputComment, setInputComment] = useState('');

  //   useEffect(() => {
  //     setUrl(`${API_SERVER}/feed/images/${id}`);
  //   }, [data]);
  //   const changeInputHandler = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
  //     setInputComment(e.target.value);
  //   };

  //   const addNewComment = () => {
  //     if (data) {
  //       if (inputComment.length < 5) {
  //         alert('댓글은 5자 이상이어야 합니다.');
  //         return;
  //       }
  //       const postData = {
  //         content: inputComment,
  //       };
  //       const { METHOD, ADDR } = FEED_IMAGE_ADD_COMMENT(id);
  //       Axios({
  //         METHOD,
  //         ADDR,
  //         postData,
  //       })
  //         .then((response) => {
  //           if (!response.data.success) {
  //             console.error(response.data.msg);
  //           } else {
  //             setData(response.data.data);
  //             if (commentRef.current) {
  //               commentRef.current.value = '';
  //             }
  //           }
  //         });
  //     }
  //   };

  return (
    <S.CreatorContainer>
      <S.PortfolioContainer>
        <Portfolio />
      </S.PortfolioContainer>
      <S.WorksContainer>
        <FeedMyWorks />
      </S.WorksContainer>
    </S.CreatorContainer>
  );
};
export default CreatorContainer;
