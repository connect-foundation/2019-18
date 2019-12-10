import React, { useEffect } from 'react';

import Quill from 'react-quill';
import * as S from './styles';
import MusicPlayer from '../MusicPlayer';
import { MusicDetailProp } from './types';
import PlayerFooter from './PlayerFooter';
import { IMusicContent } from '../MusicDetail/types';
import { IMusic } from '../UploadMusic/types';
import { getShortId } from '../../utils';

const MusicDetail: React.FC<MusicDetailProp> = ({
  data,
  user,
  isLoading,
  isError,
}) => {
  useEffect(() => {
    console.log('use effect in music detail');
    console.log('---------isLoading---------');
    console.log(isLoading);
    console.log('---------data------------');
    console.log(data);
  }, []);

  useEffect(() => {
    console.log('isLoading is changed in Music Detail');
    console.log(isLoading);
  }, [isLoading]);

  useEffect(() => {
    console.log('data is changed in Music Detail');
    console.log(data);
  }, [data]);

  return (isLoading || data === null
    ? (<div>Loading...</div>)
    : (
      <S.Container>
        <S.Header>
          <S.HeaderTitle>{data.title}</S.HeaderTitle>
          <S.HeaderMeta>
            <span>by</span>
          &nbsp;
            <S.Strong>{data.owner.name}</S.Strong>
          &nbsp;
            <span>{`| ${data.createdAt} | 조회 ${data.views}`}</span>
          </S.HeaderMeta>
        </S.Header>
        {
          (data.content as IMusicContent[]).map((content, index) => {
            console.log('loop map in music detail');
            if (content.type === 'musics') {
              const music = content.content as IMusic;
              console.log('the content is music1!');
              console.log(music);
              return (
                <div key={getShortId()}>
                  <MusicPlayer
                    title={music.title}
                    author={data.owner.name}
                    coverUrl={music.imageUrl}
                    musicUrl={music.musicUrl}
                  />
                  <PlayerFooter
                    view={data.views}
                    genres={music.genres}
                    moods={music.moods}
                    instruments={music.instruments}
                  />
                </div>
              );
            }
            return (
              <Quill
                value={content.content as string}
                theme="bubble"
                readOnly
              />
            );
          })
        }
      </S.Container>
    )
  );
};

export default MusicDetail;
