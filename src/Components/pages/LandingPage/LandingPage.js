import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  LandingPage as StyledLandingPage,
  Content,
  Title,
  Tagline,
  BackgroundImage,
  AnimatedText
} from './LandingPage.styles';


export const LandingPage = () => {
  return (
    <StyledLandingPage>
      <BackgroundImage />
      <Container fluid>
        <Row>
          <Col md={6}>
            <Content>
              <Title>
                <AnimatedText delay={0.2}>Unicorn</AnimatedText>{' '}
                <AnimatedText delay={0.4}>Studios</AnimatedText>{' '}
              </Title>
              <Tagline>
                <AnimatedText delay={0.6}>Create.</AnimatedText>{' '}
                <AnimatedText delay={0.8}>Transform.</AnimatedText>{' '}
                <AnimatedText delay={1.0}>Elevate.</AnimatedText>{' '}
              </Tagline>
            </Content>
          </Col>
        </Row>
      </Container>
    </StyledLandingPage>
  );
};