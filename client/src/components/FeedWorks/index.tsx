import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { getShortId } from '../../utils';
import WorksCard from '../Card/WorksCard';
import * as S from './styles';
import { IImage } from './type';

type FeedWorksProps = {
  data: IImage[];
  isLoading: boolean;
};

const FeedWorks:React.FC<FeedWorksProps> = ({
  data, isLoading,
}) => (
  <S.Container>
    <S.FeedWrapper>
      {
          data.map(({
            _id, ownerId, url, creator, title, numOfComments, views,
          }) => (
            <WorksCard
              _id={_id}
              ownerId={ownerId}
              imgUrl={url}
              creator={creator}
              key={getShortId()}
              title={title}
              numOfComments={numOfComments}
              views={views}
            />
          ))
        }
    </S.FeedWrapper>

    <S.Progress id="hi">
      {isLoading && <CircularProgress color="inherit" />}
    </S.Progress>
  </S.Container>
);

export default FeedWorks;
