import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useParams } from 'react-router';
import useGetFeed from '../../hooks/useGetFeed';
import { API_SERVER } from '../../utils/constants';
import Like from '../../commons/Like';

import * as S from './styles';

interface IData {
    content:{
        type:string,
        content:string,
    }[],
    emoji: string[],
    comments:string[],
    commentsAllow: boolean,
    public: boolean,
    tags:string[],
    views: number,
    _id: string,
    owner: {
      _id: string,
      name: string,
    },
    title: string,
    ccl: string,
    field: string,
}

const WorkDetail = ({ match }: RouteComponentProps<{id:string}>) => {
  const { id } = match.params;
  const [{ data, isLoading, isError }, setUrl] = useGetFeed<IData | null>(null);

  useEffect(() => {
    setUrl(`${API_SERVER}/feed/images/${id}`);
  }, [data]);

  return (
    isLoading || data === null
      ? (<div>Loading...</div>)
      : (
        <S.Container>
          <S.Title>{data.title}</S.Title>
          <S.Creator>{`by ${data.owner.name} | 2019.11.26 | 조회${data.views}`}</S.Creator>

          <S.CommentContainer>
            <S.CommentHeader>내 아이디 올 자리</S.CommentHeader>
            <S.CommentInput contentEditable></S.CommentInput>
            <S.CommentFooter>
              <S.Mention>멘션</S.Mention>
              <S.Mention>비밀댓글</S.Mention>
              <S.SubmitButton>등록</S.SubmitButton>
            </S.CommentFooter>
          </S.CommentContainer>

          <S.Comment>
            <S.CommentOwner>오너다</S.CommentOwner>
            {data.comments[0]}
            <S.CommentTimestamp>2019-07-10 09:01</S.CommentTimestamp>
            <S.Right>
              <Like initCount={10} />
            </S.Right>
          </S.Comment>
          <S.Comment>{data.comments[1]}</S.Comment>


          <S.CopyRight>{`Copyright © ${data.owner.name} All Rights Reserved`}</S.CopyRight>
        </S.Container>

      )


  );
};

export default WorkDetail;
