import React from 'react';
import theme from './styles/theme';
import Wave from './Wave';
import { Image } from './styles/Wave.styled';
import { Flex, W50, Container } from './styles/Helpers.styled';
import { Button } from './styles/Button.styled';

const BodySection = () => {
  return (
    <>
      <Wave dark={true}>
        <Flex>
          <W50>
            <h1>Grow Together</h1>
            <p>
              Generate meaningful discussions with your audience and build a
              strong, loyal community. Think of the insightful conversations you
              miss out on with a feedback form.{' '}
            </p>
          </W50>

          <W50>
            <Image src='./images/illustration-grow-together.svg' />
          </W50>
        </Flex>
      </Wave>

      <Flex>
        <W50>
          <Image src='./images/illustration-flowing-conversation.svg' />
        </W50>
        <W50>
          <h1>Flowing Conversations</h1>
          <p>
            You wouldn't paginate a conversation in real life, so why do it
            online? Our threads have just-in-time loading for a more natural
            flow.
          </p>
        </W50>
      </Flex>

      <Wave dark={true}>
        <Flex>
          <W50>
            <h1>Your Users</h1>
            <p>
              It takes no time at all to integrate Huddle with your app's
              authentication solution. This means, once signed in to your app,
              your users can start chatting immediately.
            </p>
          </W50>

          <W50>
            <Image src='./images/illustration-your-users.svg' />
          </W50>
        </Flex>
      </Wave>
      <Container>
        <h1>Ready to build your community?</h1>
        <Button> Get Started For Free</Button>
      </Container>
    </>
  );
};

export default BodySection;
