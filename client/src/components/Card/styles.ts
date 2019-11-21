import styled from 'styled-components';
import Img from '../../basics/Img';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 15rem;
    height: 20rem;
    margin: 1rem;
    border-radius: 10px;
    border: 1px solid black;
`;

export const CardImgContainer = styled.div`
    width: 100%;
    height: 10rem;
`;

export const CardImg = styled(Img)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin-bottom: auto;
    border-top-left-radius:10px;
    border-top-right-radius: 10px;
`;

export const CardHeader = styled.div`
    padding: 0 1rem;
`;

export const CardBody = styled.div`
    display: flex;
    padding: 0 1rem;
    border-bottom: 1px #DDDDDD solid;
`;

export const CardFooter = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: auto;
    padding: 0 1rem;
`;
