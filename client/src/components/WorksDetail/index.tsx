import React from 'react';
import * as S from './styles';
import { WorksDetailProp } from './types';
import Comment from '../Comment';

const WorksDetail:React.FC<WorksDetailProp> = ({
  data, inputComment, isLoading, isError, changeInputHandler, addNewComment,
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

        <Comment
          comments={data.comments}
          commentsAllow={data.commentsAllow}
          inputComment={inputComment}
          changeInputHandler={changeInputHandler}
          addNewComment={addNewComment}
        />

        <S.CopyRight>{`Copyright © ${data.owner.name} All Rights Reserved`}</S.CopyRight>
      </S.Container>
    )
);


export default WorksDetail;
