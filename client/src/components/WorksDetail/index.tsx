import React from 'react';
import * as S from './styles';
<<<<<<< HEAD
import { WorksDetailProp } from './types';
import Comment from '../Comment';
=======
import Like from '../../commons/Like';

import { getTime } from '../../utils';
import { CommentProp, WorksDetailProp } from './types';

const Comment:React.FC<CommentProp> = ({ owner, comment, createdAt }) => (
  <S.Comment>
    <S.CommentOwner>{owner}</S.CommentOwner>
    <S.CommentContent>{comment}</S.CommentContent>
    <S.CommentTimestamp>{createdAt}</S.CommentTimestamp>
    <S.Right>
      <Like initCount={10} />
    </S.Right>
  </S.Comment>
);
>>>>>>> b56116383d9dee7a64ec0f97559dc406558ce10c

const WorksDetail:React.FC<WorksDetailProp> = ({
  data, inputComment, user, isLoading, isError, changeInputHandler, addNewComment,
}) => (
  isLoading || data === null
    ? (<div>Loading...</div>)
    : (
      <S.Container>
        <S.Title>{data.title}</S.Title>
        <S.HeaderMeta>
          <span>by</span>
          &nbsp;
          <S.Strong>{data.owner.name}</S.Strong>
          &nbsp;
          <span>{`| 2019.11.26 | 조회 ${data.views}`}</span>
        </S.HeaderMeta>

        {data.content.map((content, idx) => {
          if (content.type === 'description') {
            return <p key={idx}>{content.content}</p>;
          }
          return (
            <S.ContentImg src={content.content} key={idx} />
          );
        })}

        <Comment
          comments={data.comments}
          commentsAllow={data.commentsAllow}
          user={user}
          inputComment={inputComment}
          changeInputHandler={changeInputHandler}
          addNewComment={addNewComment}
        />

        <S.CopyRight>{`Copyright © ${data.owner.name} All Rights Reserved`}</S.CopyRight>
      </S.Container>
    )
);


export default WorksDetail;
