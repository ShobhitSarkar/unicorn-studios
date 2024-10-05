import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import styled from 'styled-components';

const StyledNavbar = styled(BootstrapNavbar)`
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
`;

const StyledNav = styled(Nav)`
  margin: 0 auto;
`;

const StyledNavLink = styled(Link)`
  color: white !important;
  margin: 0 15px;
  font-weight: bold;
  position: relative;
  transition: color 0.3s ease;
  text-decoration: none;

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 50%;
    background-color: #00FFFF;
    transition: all 0.3s ease;
  }

  &:hover {
    color: #00FFFF !important;

    &:after {
      width: 100%;
      left: 0;
    }
  }
`;

const Navbar = () => {
  return (
    <StyledNavbar expand="lg" variant="dark" fixed="top">
      <Container>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <StyledNav>
            <StyledNavLink to="/">Home</StyledNavLink>
            <StyledNavLink to="/about">About</StyledNavLink>
            <StyledNavLink to="/portfolio">Portfolio</StyledNavLink>
            <StyledNavLink to="/services">Services</StyledNavLink>
            <StyledNavLink to="/contact">Contact</StyledNavLink>
          </StyledNav>
        </BootstrapNavbar.Collapse>
      </Container>
    </StyledNavbar>
  );
};

export default Navbar;