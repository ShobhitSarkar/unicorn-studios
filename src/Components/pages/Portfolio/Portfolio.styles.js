// src/Components/pages/Portfolio/Portfolio.styles.js
import styled, { keyframes } from 'styled-components';

const glowAnimation = keyframes`
  0% { box-shadow: 0 0 5px rgba(0, 255, 255, 0.5); }
  50% { box-shadow: 0 0 20px rgba(0, 255, 255, 0.8), 0 0 30px rgba(0, 255, 255, 0.6); }
  100% { box-shadow: 0 0 5px rgba(0, 255, 255, 0.5); }
`;

export const PortfolioWrapper = styled.div`
  background-color: #000;
  color: #fff;
  padding: 80px 0;
  min-height: 100vh;
`;

export const PortfolioHeader = styled.h1`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 60px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  padding: 0 15px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectCard = styled.div`
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  aspect-ratio: 1 / 1;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 0 30px rgba(0, 255, 255, 0.3);
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: filter 0.3s ease;
`;

export const ProjectInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: background 0.3s ease;

  ${props => props.isHovered && `
    background: rgba(0, 0, 0, 0.95);
  `}
`;

export const ProjectTitle = styled.h3`
  font-size: 2rem;
  color: #00FFFF;
  margin-bottom: 10px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const ProjectSummary = styled.p`
  font-size: 1.2rem;
  color: #fff;
  margin-bottom: 20px;
`;

export const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #fff;
  line-height: 1.6;
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition: opacity 0.3s ease, max-height 0.3s ease;

  ${props => props.isHovered && `
    opacity: 1;
    max-height: 200px;
  `}
`;

export const HoverEffect = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(0, 255, 255, 0.1), rgba(255, 0, 255, 0.1));
  opacity: ${props => props.isHovered ? 1 : 0};
  transition: opacity 0.3s ease;
  pointer-events: none;
  animation: ${glowAnimation} 2s infinite;
`;