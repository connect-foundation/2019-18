import styled from 'styled-components';

const Button = styled.button`
    background: ${props=>props.theme.green};
    width: 4rem;
    height: 2rem;
    color: white;
    border: none;
    border-radius: 100px;
    cursor: pointer;
`;

export default Button;