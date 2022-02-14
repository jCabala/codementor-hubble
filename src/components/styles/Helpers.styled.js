import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${({ width }) => width || 'auto'};
  padding: 30px;

  & > * {
    margin: 40px;
  }
`;

export const Container = styled.div`
  width: 1000px;
  max-width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  text-align: center;

  & > p {
    width: 70%;
  }

  & > * {
    margin: 20px auto;
  }
`;

export const W50 = styled.div`
  width: 50%;
  max-width: 500px;
  margin: 0 auto;
`;
