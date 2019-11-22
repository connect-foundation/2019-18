import styled from 'styled-components';
import input from './index';

const PasswordInput = styled(input).attrs({
  type: 'password',
})`
    height: 2.5rem;
    display: block;
    border-radius: 5px; 
    font-size : 0.9rem;
    border: 2px solid #EFEFEF;
    padding: 0 0.3rem;
    ::placeholder {
        color : #343e7a;
        font-size : 1rem;
    };
`;

export default PasswordInput;
