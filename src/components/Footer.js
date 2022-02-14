import React from 'react';
import theme from './styles/theme';
import { StyledFooter } from './styles/StyledFooter.styled.js';
import { Flex, W50 } from './styles/Helpers.styled';
import { Button } from './styles/Button.styled';

const Footer = () => {
  return (
    <StyledFooter>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
        <path
          fill={theme.colors.darkCyan}
          fill-opacity='1'
          d='M0,128L80,112C160,96,320,64,480,80C640,96,800,160,960,186.7C1120,213,1280,203,1360,197.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'
        ></path>
      </svg>

      <Flex>
        <W50>
          <img src='./images/logo_white.svg' alt='' />
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla
          quam, hendrerit lacinia vestibulum a, ultrices quis sem.
          <br /> <br />
          <span>
            <i class='fas fa-phone'></i>
            {'   '}Phone: +1-543-123-4567{' '}
          </span>
          <br /> <br />
          <span>
            <i class='fas fa-envelope-open'></i>
            {'   '} example@huddle.com
          </span>
        </W50>
        <W50>
          <h2>Newsletter</h2> To recieve tips on how to grow your community,
          sign up to our weekly newsletter. We’ll never send you spam or pass on
          your email address
          <form>
            <input type='text' />
            <Button>Subscribe</Button>
          </form>
        </W50>
      </Flex>
    </StyledFooter>
  );
};

export default Footer;
