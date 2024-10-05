import styled from 'styled-components';

export const PortfolioWrapper = styled.div`
  background-color: #000;
  color: #fff;
  padding: 80px 0 60px; // Increased top padding
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; // Align content to the top

  @media (max-width: 768px) {
    padding: 60px 0 40px; // Adjusted padding for mobile
  }
`;

export const PortfolioHeader = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin: 0 0 60px; // Removed top margin, kept bottom margin
  padding: 0 20px; // Added horizontal padding
  font-weight: 300;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 40px;
  }
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
  padding: 0 20px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
    padding: 0 15px;
  }
`;

export const ProjectCard = styled.div`
  background-color: transparent;
  width: 100%;
  height: 300px;
  perspective: 1000px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 255, 255, 0.1);
  transition: box-shadow 0.3s ease;

  @media (max-width: 768px) {
    height: 250px;
  }

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 255, 255, 0.2);

    .front {
      transform: rotateY(180deg);
    }
    .back {
      transform: rotateY(0deg);
    }
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
  padding: 20px;
`;

export const ProjectFront = styled(CardSide).attrs({ className: 'front' })`
  background-size: cover;
  background-position: center;
`;

export const ProjectBack = styled(CardSide).attrs({ className: 'back' })`
  background-color: #111;
  transform: rotateY(180deg);
  text-align: center;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #00FFFF;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.4;
  }
`;

export const ProjectLink = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #00FFFF;
  color: #000;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #00CCCC;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 0.9rem;
  }
`;