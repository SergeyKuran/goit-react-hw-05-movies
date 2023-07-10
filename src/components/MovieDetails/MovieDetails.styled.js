import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  flex-direction: column;
  align-items: flex-start;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const A = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  te
`;

export const Button = styled.button`
  padding: 4px 8px;
  border-radius: 4px;
  border: none;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &:hover {
    color: white;
    background-color: green;
  }
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  margin-left: 30p;
  gap: 50px;
  list-style: none;
`;
