import styled from 'styled-components';

export const StyledFooter = styled.section`
  & > div > img {
    height: 30px;
  }

  & > * {
    color: white;
  }

  & > div {
    background-color: ${({ theme }) => theme.colors.darkCyan};
    padding-bottom: 2rem;
  }

  & > svg {
    position: relative;
    top: 6px;
  }

  & > div > div:nth-last-of-type(1) {
    margin-bottom: 3rem;
  }
`;
