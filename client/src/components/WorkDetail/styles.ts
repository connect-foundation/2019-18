import styled from 'styled-components';
import H3 from '../../basics/H3';
import H4 from '../../basics/H4';

export const Container = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto
`;

export const Title = styled(H3)`
    margin-right: auto;
`;

export const Creator = styled(H4)`
    margin-right: auto;
`;
