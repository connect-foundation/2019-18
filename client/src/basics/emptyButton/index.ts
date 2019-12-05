import styled from 'styled-components';

const ReverseButton = styled.button`
    border: 2px ${(props) => props.theme.green} solid;
    border-radius: 10px;
    height: 2rem;
    color: ${(props) => props.theme.green};
    cursor: pointer;
    outline: none;
`;

export default ReverseButton;
