import styled from 'styled-components';

export const StyledWave = styled.div`
  & > article {
    background: ${({ dark, theme }) =>
      dark ? theme.colors.header : theme.colors.body};
    padding: 50px 0;
  }
  width: 100vw;

  & > div:nth-of-type(1) {
    position: relative;
    top: 6px;
  }
`;

export const WaveContainer = styled.div`
  width: 100%;
`;

export const Image = styled.img`
  margin-left: 0 auto;
`;
