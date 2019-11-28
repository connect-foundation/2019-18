import styled from 'styled-components';

const A = styled.a`
    text-decoration: none;
    href: url(${(props) => props.href})
`;

export default A;
