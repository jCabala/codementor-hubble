import styled from 'styled-components';

export const StyledStats = styled.div`
  text-align: left;

  & > h1 {
    font-size: 3rem;
    font-weight: 700;
  }

  & > * {
    margin: 5px 0;
  }

  & > p {
    font-size: 15px;
  }

  & > i {
    color: ${({ theme }) => theme.colors.pink};
  }
`;
