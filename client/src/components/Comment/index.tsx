import React from 'react';
import * as S from './styles';
import { CommentProp, CommentListProp } from './types';
import Like from '../../commons/Like';
import { getTime, getShortId } from '../../utils';

const CommentList:React.FC<CommentListProp> = ({ owner, comment, createdAt }) => (
  <S.Comment>
    <S.CommentOwner>{owner}</S.CommentOwner>
    <S.CommentContent>{comment}</S.CommentContent>
    <S.CommentTimestamp>{createdAt}</S.CommentTimestamp>
    <S.Right>
      <Like initCount={10} />
    </S.Right>
  </S.Comment>
);

const Comment: React.FC<CommentProp> = ({
  comments, commentsAllow, user, inputComment, changeInputHandler, addNewComment,
}) => (
  <S.CommentContainer>
    <S.CommentInputWrapper>
      {
        user.isLogin
          ? <S.CommentHeader>{user.name}</S.CommentHeader>
          : (
            <S.CommentHeader>
              <S.WeakText>댓글을 남기시려면 </S.WeakText>
              <S.SLink to="/login">로그인</S.SLink>
              <S.WeakText> 해주세요</S.WeakText>
            </S.CommentHeader>
          )
      }
      {
      commentsAllow
        ? <S.CommentInput onChange={changeInputHandler} value={inputComment} />
        : <S.CommentInput readOnly value="댓글이 허용되지 않는 게시물 입니다." />
      }

      <S.CommentFooter>
        <S.Mention>멘션</S.Mention>
        <S.Mention>비밀 댓글</S.Mention>
        {
          commentsAllow
            ? <S.SubmitButton onClick={addNewComment}>등록</S.SubmitButton>
            : <S.SubmitButton>등록</S.SubmitButton>
        }

      </S.CommentFooter>
    </S.CommentInputWrapper>

    <S.Hr></S.Hr>

    {commentsAllow
      && (
        comments.map((comment, idx) => (
          <CommentList
            owner={comment.ownerName}
            comment={comment.content}
            createdAt={getTime(comment.createdAt)}
            key={getShortId()}
          />
        ))
      )}


  </S.CommentContainer>
);

export default Comment;
