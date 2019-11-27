import styled from 'styled-components';
import input from './index';
import { theme } from '../../style/theme';

const UploadTitle = styled(input)`
    height: 60px;
    display: block;
    font-size : 20px;
    padding: 0 0.3rem;
    ::placeholder {
        color : ${theme.BLOR_TEXT};
        font-size : 20px;
    };
`;

export default UploadTitle;
