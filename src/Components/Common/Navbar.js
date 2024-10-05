import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const StyledNavbar = styled(BootstrapNavbar)`
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledNav = styled(Nav)`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const StyledNavLink = styled(Link)`
  color: #F5F5F5 !important;
  margin: 0 15px;
  font-weight: bold;
  position: relative;
  transition: color 0.3s ease;
  text-decoration: none;
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 50%;
    background-color: #D4AF37;
    transition: all 0.3s ease;
  }

  &:hover, &.active {
    color: #D4AF37 !important;

    &:after {
      width: 100%;
      left: 0;
    }
  }

  @media (max-width: 991px) {
    margin: 10px 0;
  }
`;

const BurgerButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1000;
  position: relative;
`;

const BurgerIcon = styled(motion.div)`
  width: 24px;
  height: 3px;
  background-color: #F5F5F5;
  margin: 5px 0;
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  const closeNavbar = () => setIsOpen(false);

  return (
    <StyledNavbar expand="lg" variant="dark" fixed="top">
      <StyledContainer>
        <BootstrapNavbar.Brand href="#home">Falcon Studios</BootstrapNavbar.Brand>
        <BurgerButton onClick={toggleNavbar} className="d-lg-none">
          <AnimatePresence>
            {isOpen ? (
              <motion.svg
                key="close"
                initial={{ rotate: 0 }}
                animate={{ rotate: 180 }}
                exit={{ rotate: 0 }}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  exit={{ pathLength: 0 }}
                  d="M18 6L6 18M6 6L18 18"
                  stroke="#F5F5F5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            ) : (
              <motion.div
                key="open"
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  closed: { opacity: 0 },
                  open: { opacity: 1 },
                }}
              >
                <BurgerIcon
                  variants={{
                    closed: { y: 0 },
                    open: { y: 0 },
                  }}
                />
                <BurgerIcon
                  variants={{
                    closed: { opacity: 0 },
                    open: { opacity: 1 },
                  }}
                />
                <BurgerIcon
                  variants={{
                    closed: { y: 0 },
                    open: { y: 0 },
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </BurgerButton>
        <BootstrapNavbar.Collapse in={isOpen}>
          <StyledNav>
            <StyledNavLink to="home" spy={true} smooth={true} duration={500} onClick={closeNavbar}>Home</StyledNavLink>
            <StyledNavLink to="about" spy={true} smooth={true} duration={500} onClick={closeNavbar}>About</StyledNavLink>
            <StyledNavLink to="portfolio" spy={true} smooth={true} duration={500} onClick={closeNavbar}>Portfolio</StyledNavLink>
            <StyledNavLink to="services" spy={true} smooth={true} duration={500} onClick={closeNavbar}>Services</StyledNavLink>
            <StyledNavLink to="contact" spy={true} smooth={true} duration={500} onClick={closeNavbar}>Contact</StyledNavLink>
          </StyledNav>
        </BootstrapNavbar.Collapse>
      </StyledContainer>
    </StyledNavbar>
  );
};

export default Navbar;