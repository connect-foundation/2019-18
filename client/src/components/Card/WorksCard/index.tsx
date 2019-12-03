import React from 'react';

import TextWithImg from '../../../commons/TextWithImg';
import * as S from './styles';
import H3 from '../../../basics/H3';

import StyledLink from '../../../basics/StyledLink';
import CardFooter from '../CardFooter';
import WorksCardProp from './types';

const WorksCard: React.FC<WorksCardProp> = ({
  _id, ownerId, imgUrl, creator, title, numOfComments, views,
}) => (
  <S.Container>
    <S.CardImgContainer>
      <S.CardImg src={imgUrl} />
    </S.CardImgContainer>
    <S.CardHeader>
      <StyledLink to={`/home/detail-image/${ownerId}`}>
        <H3>{title}</H3>
      </StyledLink>
    </S.CardHeader>
    <S.CardBody id={creator._id}>
      <TextWithImg
        src="https://kr.object.ncloudstorage.com/crafolio/user/thumbnail/user-profile-thumbnail.png"
        text={creator.name}
      />
    </S.CardBody>
    <CardFooter
      smiles="20"
      comments={numOfComments}
      views={views}
    />
  </S.Container>
);

export default WorksCard;
