import styled, { keyframes } from 'styled-components';

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const orbFloat = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
`;

export const PortfolioWrapper = styled.section`
  background: #000;
  color: #F5F5F5;
  padding: 120px 0;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 80px 0;
  }
`;

export const PortfolioHeader = styled.h2`
  font-size: 3.5rem;
  margin-bottom: 3rem;
  text-align: center;
  background: linear-gradient(90deg, #D4AF37, #1C2F4A);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${gradientAnimation} 5s ease infinite;
  background-size: 200% 200%;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 0 20px;
  }
`;

export const ProjectCard = styled.div`
  background-color: transparent;
  width: 100%;
  height: 400px;
  perspective: 1000px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);

    .front {
      transform: rotateY(180deg);
    }
    .back {
      transform: rotateY(0deg);
    }
  }

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const CardSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transition: transform 0.6s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(212, 175, 55, 0.2);
`;

export const ProjectFront = styled(CardSide).attrs({ className: 'front' })`
  background-size: cover;
  background-position: center;
  border: 3px solid #D4AF37;
`;

export const ProjectBack = styled(CardSide).attrs({ className: 'back' })`
  background-color: rgba(28, 47, 74, 0.9);
  border: 3px solid #D4AF37;
  transform: rotateY(180deg);
  text-align: center;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #D4AF37;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const ProjectDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 25px;
  color: #F5F5F5;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ProjectLink = styled.a`
  display: inline-block;
  padding: 12px 24px;
  background-color: #D4AF37;
  color: #000;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;
  border-radius: 5px;

  &:hover {
    background-color: #F5F5F5;
    color: #1C2F4A;
    transform: translateY(-3px);
    box-shadow: 0 5px 10px rgba(212, 175, 55, 0.3);
  }
`;

export const GlowingOrb = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.3) 0%, rgba(28, 47, 74, 0.3) 100%);
  filter: blur(60px);
  opacity: 0.4;
  top: -200px;
  right: -200px;
  animation: ${orbFloat} 15s ease-in-out infinite;
`;