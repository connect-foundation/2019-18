import React from 'react';
import Quill from 'react-quill';
import * as S from './styles';
import Comment from '../Comment';
import Like from '../../commons/Like';
import { getTimeSimple, getShortId } from '../../utils';
import { CommentProp, WorksDetailProp } from './types';
import { UPLOAD } from '../../utils/constants';

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
          <span>{`| ${getTimeSimple(data.createdAt)}`}</span>
          &nbsp;
          <span>{`| 조회 ${data.views}`}</span>
        </S.HeaderMeta>

        {data.content.map((content, idx) => {
          if (content.type === UPLOAD.DESCRIPTION) {
            return (
              <Quill
                key={getShortId()}
                value={content.content as string}
                theme="bubble"
                readOnly
              />
            );
          }
          return (
            <S.ContentImg src={content.content} key={idx} />
          );
        })}

        <S.CopyRight>{`Copyright © ${data.owner.name} All Rights Reserved`}</S.CopyRight>

        <Comment
          comments={data.comments}
          commentsAllow={data.commentsAllow}
          user={user}
          inputComment={inputComment}
          changeInputHandler={changeInputHandler}
          addNewComment={addNewComment}
        />

      </S.Container>
    )
);


export default WorksDetail;
