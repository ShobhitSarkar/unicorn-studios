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
import Navbar from '../../Common/Navbar';


export const LandingPage = () => {
  return (
    <StyledLandingPage>
      <Navbar/>
      <BackgroundImage />
      <Container fluid>
        <Row>
          <Col md={6}>
            <Content>
              <Title>
                <AnimatedText delay={0.4}>Falcon</AnimatedText>{' '}
                <AnimatedText delay={0.8}>Studios</AnimatedText>{' '}
              </Title>
              <Tagline>
                <AnimatedText delay={1.2}>Create.</AnimatedText>{' '}
                <AnimatedText delay={1.6}>Transform.</AnimatedText>{' '}
                <AnimatedText delay={2.0}>Elevate.</AnimatedText>{' '}
              </Tagline>
            </Content>
          </Col>
        </Row>
      </Container>
    </StyledLandingPage>
  );
};