import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
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

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 300px;
`;

export const Form = styled.form`
  text-align: center;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  padding: 4px 8px;
  border-radius: 4px;
  border: none;
  text-decoration: none;
  color: black;
  font-weight: 500;
  margin-left: 10px;
  height: fit-content;
  display: flex;
  margin-top: auto;

  &:hover {
    color: white;
    background-color: green;
  }
`;
