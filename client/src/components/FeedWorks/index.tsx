import React from 'react';
import styled from 'styled-components';
import Card from '../Card';

const Container = styled.div`
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;

    width: 60%;
    margin: auto;


`;

const FeedWorks:React.FC = () => (
  <Container>
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </Container>
);

export default FeedWorks;
