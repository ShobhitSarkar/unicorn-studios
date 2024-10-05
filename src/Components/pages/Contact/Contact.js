import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import {
  ContactSection,
  ContactTitle,
  ContactSubtitle,
  CalendlyWrapper,
  ContactInfo,
  ConnectTitle,
  ContactCard,
  ContactIcon,
  ContactLink,
  ContactCardsWrapper
} from './Contact.styles';

const Contact = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const contactMethods = [
    { icon: <FaEnvelope />, link: "mailto:contact@unicornstudios.com", text: "Email Us" },
    { icon: <FaTwitter />, link: "https://twitter.com/unicornstudios", text: "Twitter" },
    { icon: <FaLinkedin />, link: "https://linkedin.com/company/unicornstudios", text: "LinkedIn" },
    { icon: <FaGithub />, link: "https://github.com/unicornstudios", text: "GitHub" }
  ];

  return (
    <ContactSection>
      <Container>
        <ContactTitle>Get in Touch</ContactTitle>
        <ContactSubtitle>
          Ready to transform your digital presence? Schedule a call or reach out through your preferred method.
        </ContactSubtitle>
        <Row>
          <Col lg={6}>
            <CalendlyWrapper>
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/yourusername" 
                style={{ minWidth: '320px', height: '630px' }} 
              />
            </CalendlyWrapper>
          </Col>
          <Col lg={6}>
            <ContactInfo>
              <ConnectTitle>Connect With Us</ConnectTitle>
              <ContactCardsWrapper>
                {contactMethods.map((method, index) => (
                  <ContactCard key={index}>
                    <ContactIcon>{method.icon}</ContactIcon>
                    <ContactLink href={method.link} target="_blank" rel="noopener noreferrer">
                      {method.text}
                    </ContactLink>
                  </ContactCard>
                ))}
              </ContactCardsWrapper>
            </ContactInfo>
          </Col>
        </Row>
      </Container>
    </ContactSection>
  );
};

export default Contact;