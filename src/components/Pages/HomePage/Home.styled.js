import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;

  &::hover {
    fill: black;
  }
`;

export const A = styled(Link)`
  text-decoration: none;

  &:hover {
    color: green;
  }
`;
