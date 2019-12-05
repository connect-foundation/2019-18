import styled from 'styled-components';
import { theme } from '../../style/theme';

const TextInput = styled.textarea`
    width: 98%;
    height: 95%;    
    border: none;
    font-size : 13px;
    ::placeholder {
        color : ${theme.PALE_TEXT};
        font-size : 14px;
    };
`;
export default TextInput;
