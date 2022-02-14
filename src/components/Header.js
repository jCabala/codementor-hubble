import React from 'react';
import { StyledHeader, Nav, Logo, Image } from './styles/Header.styled';
import { Button } from './styles/Button.styled';
import { Container, Flex, W50 } from './styles/Helpers.styled';
import Stats from './Stats';
import theme from './styles/theme';

const Header = () => {
  const {
    colors: { pink },
  } = theme;

  return (
    <StyledHeader>
      <Nav>
        <Logo src='./images/logo.svg' alt='' />
        <Button bg='transparent' color={pink} border={pink}>
          Try It Free
        </Button>
      </Nav>

      <Container>
        <h1>Build The Community Your Fans Will Love</h1>
        <p>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <Button>Get Started For Free</Button>
        <br />
        <Image src='./images/illustration-mockups.svg' />

        <Flex width='375px'>
          <Stats>
            <i class='fas fa-users' />
            <h1>1.4k+</h1>
            <p>Communities Formed</p>
          </Stats>
          <Stats>
            <i class='fas fa-comment-alt' />
            <h1>2.7m+</h1>
            <p>Messages Sent</p>
          </Stats>
        </Flex>
      </Container>
    </StyledHeader>
  );
};

export default Header;
