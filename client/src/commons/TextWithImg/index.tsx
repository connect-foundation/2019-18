import React from 'react';
import styled from 'styled-components';
import Img from '../../basics/Img';
import H4 from '../../basics/H4';
import * as S from './styles';

interface Props {
    src: string;
    text: string;
    small?: any;
}

const SmallImg = styled(Img)`
    width: ${(props:{small?:any}) => {
    if (props.small) return '1.2rem';
    return '1.5rem';
  }};
    height: auto;
    border-radius: 100%;
`;

const SmallH4 = styled(H4)`
    margin-left: 0.5rem;
    margin-right: 1rem;
`;

const TextWithImg: React.FC<Props> = ({ src, text, small }) => (
  <S.Container>
    {small ? <SmallImg src={src} small /> : <SmallImg src={src} />}
    <SmallH4>{text}</SmallH4>
  </S.Container>
);

export default TextWithImg;
