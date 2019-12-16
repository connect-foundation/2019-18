import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../../../style/theme';

export const Container = styled.div`
  display: flex;
  padding: 1rem;
  border-top: 1px solid ${theme.BORDER_GRAY};
`;

export const Thumbnail = styled.img`
  width: 2rem;
  border-radius: 3rem;
  margin: auto 1rem;
  margin-left: 0;
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
