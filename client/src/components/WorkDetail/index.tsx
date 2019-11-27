import React, { useState, useEffect, useRef } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useParams } from 'react-router';
import axios from 'axios';
import useGetFeed from '../../hooks/useGetFeed';
import { API_SERVER } from '../../utils/constants';
import Like from '../../commons/Like';
import getTime from '../../utils/time';

import * as S from './styles';

interface IData {
    content:{
        type:string,
        content:string,
    }[],
    emoji: string[],
    comments:{
      owner: string,
      content: string,
      createdAt: number,
    }[],
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
  createdAt: string;
}

const Comment = ({ owner, comment, createdAt }:CommentProp) => (
  <S.Comment>
    <S.CommentOwner>{owner}</S.CommentOwner>
    <S.CommentContent>{comment}</S.CommentContent>
    <S.CommentTimestamp>{createdAt}</S.CommentTimestamp>
    <S.Right>
      <Like initCount={10} />
    </S.Right>
  </S.Comment>
);

const WorkDetail = ({ match }: RouteComponentProps<{id:string}>) => {
  const { id } = match.params;
  const [{
    data, setData, isLoading, isError,
  }, setUrl] = useGetFeed<IData | null>(null);
  const commentRef = useRef<HTMLTextAreaElement>(null);
  const [inputComment, setInputComment] = useState('');

  useEffect(() => {
    setUrl(`${API_SERVER}/feed/images/${id}`);
  }, [data]);

  const changeInputHandler = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputComment(e.target.value);
  };

  const addNewComment = () => {
    if (data) {
      const postData = {
        content: inputComment,
      };
      axios.post(`${API_SERVER}/feed/images/${data._id}/add-comment`, postData)
        .then((response) => {
          if (!response.data.success) {
            console.error(response.data.msg);
          } else {
            setData(response.data.data);
            if (commentRef.current) {
              commentRef.current.value = '';
            }
          }
        });
    }
  };

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
            <S.CommentInput ref={commentRef} onChange={changeInputHandler} />
            <S.CommentFooter>
              <S.Mention>멘션</S.Mention>
              <S.Mention>비밀댓글</S.Mention>
              <S.SubmitButton onClick={addNewComment}>등록</S.SubmitButton>
            </S.CommentFooter>
          </S.CommentContainer>

          {data.comments.map((comment, idx) => (
            <Comment
              owner="내이름"
              comment={comment.content}
              createdAt={getTime(comment.createdAt)}
              key={idx}
            />
          ))}
          <S.CopyRight>{`Copyright © ${data.owner.name} All Rights Reserved`}</S.CopyRight>
        </S.Container>
      )
  );
};

export default WorkDetail;
