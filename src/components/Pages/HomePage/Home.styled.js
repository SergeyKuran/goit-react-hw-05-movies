import styled from 'styled-components';
export const Container = styled.div`
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
