import React from 'react';

import styled from 'styled-components';
import Dummy from '../../assets/dummy.jpeg';
import Img from '../Img';
import H3 from '../H3';
import TextWithImg from '../TextWithImg';

import Smile from '../../assets/smile.png';
import View from '../../assets/view.png';
import Comment from '../../assets/comment.png';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 15rem;
    height: 20rem;
    margin: 1rem;
    border-radius: 10px;
    border: 1px solid black;
`;

const CardImgContainer = styled.div`
    width: 100%;
    height: 10rem;
`;

const CardImg = styled(Img)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin-bottom: auto;
    border-top-left-radius:10px;
    border-top-right-radius: 10px;
`;

const CardHeader = styled.div`
    padding: 0 1rem;
`;

const CardBody = styled.div`
    display: flex;
    padding: 0 1rem;
    
    border-bottom: 1px #DDDDDD solid;
`;

const CardFooter = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: auto;
    padding: 0 1rem;
`;

interface CardProp{
  imgUrl: string;
  creator: string;
}

const Card: React.FC<CardProp> = ({ imgUrl, creator }) => (
  <Container>
    <CardImgContainer>
      <CardImg src={imgUrl} />
    </CardImgContainer>
    <CardHeader>
      <H3>라이언과 작은 요정들의 반짝반짝 윈터 원더랜드</H3>
    </CardHeader>
    <CardBody>
      <TextWithImg src="https://kr.object.ncloudstorage.com/crafolio/user/thumbnail/user-profile-thumbnail.png" text={creator} />
    </CardBody>
    <CardFooter>
      <TextWithImg src={Smile} small text="20" />
      <TextWithImg src={Comment} small text="200" />
      <TextWithImg src={View} small text="200" />
    </CardFooter>
  </Container>
);

export default Card;
