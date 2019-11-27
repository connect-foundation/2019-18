import React from 'react';
import * as S from './styles';
import Like from '../../commons/Like';
import Content from '../FeedContainer';
// import { CommentOwner } from '../WorkDetail/styles';
import { getTime } from '../../utils';
import { CommentProp, WorksDetailProp } from './types';

const Comment = ({ owner, comment, createdAt }: CommentProp) => (
  <S.Comment>
    <S.CommentOwner>{owner}</S.CommentOwner>
    <S.CommentContent>{comment}</S.CommentContent>
    <S.CommentTimestamp>{createdAt}</S.CommentTimestamp>
    <S.Right>
      <Like initCount={10} />
    </S.Right>
  </S.Comment>
);

const WorksDetail:React.FC<WorksDetailProp> = ({
  data, isLoading, isError, commentRef, changeInputHandler, addNewComment,
}) => (
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


export default WorksDetail;
