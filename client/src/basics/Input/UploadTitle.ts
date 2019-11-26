import styled from 'styled-components';
import input from './index';

const UploadTitle = styled(input)`
    height: 60px;
    display: block;
    font-size : 20px;
    padding: 0 0.3rem;
    ::placeholder {
        color : #343e7a;
        font-size : 1rem;
    };
`;

export default UploadTitle;
