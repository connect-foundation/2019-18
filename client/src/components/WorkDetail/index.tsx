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

interface CommentProp {
  owner: string;
  comment: string;
  time: string;
}
const Comment = ({ owner, comment, time }:CommentProp) => (
  <S.Comment>
    <S.CommentOwner>{owner}</S.CommentOwner>
    {comment}
    <S.CommentTimestamp>{time}</S.CommentTimestamp>
    <S.Right>
      <Like initCount={10} />
    </S.Right>
  </S.Comment>
);

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

          {data.content.map((content, idx) => {
            if (content.type === 'description') {
              return <p key={idx}>{content.content}</p>;
            }
            return (
              <S.ContentImg src={content.content} key={idx} />
            );
          })}

          <S.CommentContainer>
            <S.CommentHeader>내 아이디 올 자리</S.CommentHeader>
            <S.CommentInput />
            <S.CommentFooter>
              <S.Mention>멘션</S.Mention>
              <S.Mention>비밀댓글</S.Mention>
              <S.SubmitButton>등록</S.SubmitButton>
            </S.CommentFooter>
          </S.CommentContainer>

          {data.comments.map((comment) => (
            <Comment
              owner="내이름"
              comment={comment}
              time="2019-11-27 14:21"
            />
          ))}


          <S.CopyRight>{`Copyright © ${data.owner.name} All Rights Reserved`}</S.CopyRight>
        </S.Container>

      )


  );
};

export default WorkDetail;
