import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import useGetFeed from '../../hooks/useGetFeed';
import { API_SERVER } from '../../utils/constants';

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
    owner: string,
    title: string,
    ccl: string,
    field: string,
}

const WorkDetail = () => {
  const { id } = useParams();
  const [{ data, isLoading, isError }, setUrl] = useGetFeed<IData | null>(null);

  useEffect(() => {
    setUrl(`${API_SERVER}/feed/images/${id}`);
  }, [data]);

  return (
    <div>
      {
        isLoading || data === null
          ? (<div>Loading...</div>)
          : (<div>{JSON.stringify(JSON.parse(JSON.stringify(data))) }</div>)
      }
    </div>
  );
};

export default WorkDetail;
