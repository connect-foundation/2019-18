import styled from 'styled-components';

const Img = styled.img`
    width: 2rem;
    height: 2rem;
    margin: auto;
    cursor:pointer;
    background-image: url(${(props) => props.src});
`;

export default Img;
