import styled from 'styled-components';
import { LiProp } from './types';

export const DetailSelector = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: fit-content;
  top:100%;
  left: 0;
  z-index: 10;
  background: lightgrey;
  white-space: normal;
`;

export const Ul = styled.ul`
  margin-block: none;
  margin-block-start: 0;
  padding-inline-start: 0;
  margin-block-end: 0;
  margin: 1rem;
`;

export const Li = styled.li<LiProp>`
  float: left;
  list-style-type: none;
  padding: 1px;
  cursor: pointer;
  margin: auto .5rem;
  color: ${(props) => (props.selected ? 'green' : 'white')};
`;

export const Span = styled.span`
  margin: 1rem;
`;
