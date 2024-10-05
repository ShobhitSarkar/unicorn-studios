import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  AboutSection,
  AboutTitle,
  AboutContent,
  FeatureGrid,
  FeatureItem,
  FeatureIcon,
  FeatureTitle,
  FeatureDescription,
  GlowingOrb
} from './About.styles';
import { FaRocket, FaLightbulb, FaCogs, FaChartLine } from 'react-icons/fa';

const About = () => {
  return (
    <AboutSection>
      <Container>
        <Row>
          <Col lg={8} className="mx-auto">
            <AboutTitle>About Unicorn Studios</AboutTitle>
            <AboutContent>
              At Unicorn Studios, we're not just creating software; we're crafting the future. Our team of visionary developers, designers, and strategists work in perfect harmony to transform your boldest ideas into digital reality.
            </AboutContent>
          </Col>
        </Row>
        <Row>
          <Col>
            <FeatureGrid>
              <FeatureItem>
                <FeatureIcon>
                  <FaRocket />
                </FeatureIcon>
                <FeatureTitle>Innovative Solutions</FeatureTitle>
                <FeatureDescription>Pushing the boundaries of what's possible in tech</FeatureDescription>
              </FeatureItem>
              <FeatureItem>
                <FeatureIcon>
                  <FaLightbulb />
                </FeatureIcon>
                <FeatureTitle>Creative Excellence</FeatureTitle>
                <FeatureDescription>Turning complex ideas into elegant experiences</FeatureDescription>
              </FeatureItem>
              <FeatureItem>
                <FeatureIcon>
                  <FaCogs />
                </FeatureIcon>
                <FeatureTitle>Cutting-edge Tech</FeatureTitle>
                <FeatureDescription>Leveraging the latest in AI, VR, and blockchain</FeatureDescription>
              </FeatureItem>
              <FeatureItem>
                <FeatureIcon>
                  <FaChartLine />
                </FeatureIcon>
                <FeatureTitle>Growth-Driven</FeatureTitle>
                <FeatureDescription>Accelerating your business with data-driven strategies</FeatureDescription>
              </FeatureItem>
            </FeatureGrid>
          </Col>
        </Row>
      </Container>
      <GlowingOrb />
    </AboutSection>
  );
};

export default About;