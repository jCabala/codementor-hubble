import React from 'react';
import PropTypes from 'prop-types';
import { StyledWave, WaveContainer } from './styles/Wave.styled';
import theme from './styles/theme';

const Wave = ({ children, dark }) => {
  return (
    <StyledWave dark={dark}>
      <WaveContainer>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill={dark ? theme.colors.header : theme.colors.body}
            fill-opacity='1'
            d='M0,128L80,112C160,96,320,64,480,80C640,96,800,160,960,186.7C1120,213,1280,203,1360,197.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'
          ></path>
        </svg>
      </WaveContainer>
      <article>{children}</article>
      <WaveContainer>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill={dark ? theme.colors.header : theme.colors.body}
            fill-opacity='1'
            d='M0,128L80,112C160,96,320,64,480,80C640,96,800,160,960,186.7C1120,213,1280,203,1360,197.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z'
          ></path>
        </svg>
      </WaveContainer>
    </StyledWave>
  );
};

Wave.propTypes = {
  dark: PropTypes.bool,
};

export default Wave;
