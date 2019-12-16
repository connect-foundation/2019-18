import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../../../style/theme';

export const Container = styled.div`
  display: flex;
  margin: 1rem auto;
`;

export const Thumbnail = styled.img`
  width: 2rem;
  border-radius: 3rem;
  margin: auto .5rem;
  margin-bottom : 0.25rem;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

`;

export const Content = styled.div`

`;

export const Time = styled.span`
  color: ${theme.AMERICAN_RIVER};
  margin: .5rem 0;
`;

export const Strong = styled(Link)`
  font-weight: ${theme.WEIGHT.STRONG};
  color: black;
  text-decoration: none;
`;
