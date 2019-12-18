import React from 'react';

import TextWithImg from '../../../commons/TextWithImg';
import * as S from './styles';

import StyledLink from '../../../basics/StyledLink';
import CardFooter from '../CardFooter';
import WorksCardProp from './types';

const WorksCard: React.FC<WorksCardProp> = ({
  _id, ownerId, imgUrl, creator, title, numOfComments, views,
}) => (
  <S.Container>
    <StyledLink to={`/home/detail-image/${ownerId}`}>
      <S.CardImgContainer>
        <S.CardImg src={imgUrl} />
      </S.CardImgContainer>
      <S.CardHeader>
        <S.Title>{title}</S.Title>
      </S.CardHeader>

      <S.CardBody id={creator._id}>
        <TextWithImg
          src="https://kr.object.ncloudstorage.com/crafolio/user/thumbnail/user-profile-thumbnail.png"
          text={creator.name}
        />
      </S.CardBody>
      <CardFooter
        comments={numOfComments}
        views={views}
      />
    </StyledLink>
  </S.Container>
);

export default WorksCard;
