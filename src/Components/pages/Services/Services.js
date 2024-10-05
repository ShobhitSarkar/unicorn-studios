import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  ServicesSection,
  ServiceTitle,
  ServiceSubtitle,
  ServiceCard,
  ServiceIcon,
  ServiceName,
  ServiceDescription,
  LearnMoreButton
} from './Services.styles';
import { FaGlobe, FaSearch, FaMobile } from 'react-icons/fa';

const services = [
  {
    icon: <FaGlobe />,
    name: "Custom Websites",
    description: "Bespoke websites tailored for businesses and individual creators, designed to captivate and convert."
  },
  {
    icon: <FaSearch />,
    name: "SEO Optimization",
    description: "Boost your online visibility and climb search rankings with our expert SEO strategies."
  },
  {
    icon: <FaMobile />,
    name: "Responsive Web Design",
    description: "Create seamless experiences across all devices with our mobile-first approach."
  }
];

const Services = () => {
  return (
    <ServicesSection>
      <Container>
        <ServiceTitle>Our Services</ServiceTitle>
        <ServiceSubtitle>
          At Unicorn Studios, we offer a comprehensive suite of web development services designed to elevate your online presence. Our team of experts combines cutting-edge technology with creative innovation to deliver solutions that not only meet but exceed your expectations.
        </ServiceSubtitle>
        <Row className="justify-content-center">
          {services.map((service, index) => (
            <Col key={index} lg={4} md={6} sm={12}>
              <ServiceCard>
                <ServiceIcon>{service.icon}</ServiceIcon>
                <ServiceName>{service.name}</ServiceName>
                <ServiceDescription>{service.description}</ServiceDescription>
                <LearnMoreButton>Learn More</LearnMoreButton>
              </ServiceCard>
            </Col>
          ))}
        </Row>
      </Container>
    </ServicesSection>
  );
};

export default Services;