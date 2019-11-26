import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useParams } from 'react-router';
import useGetFeed from '../../hooks/useGetFeed';
import { API_SERVER } from '../../utils/constants';
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
        </S.Container>

      )


  );
};

export default WorkDetail;
