import styled from 'styled-components';

// Define some accent colors
const accentColor1 = '#00FFFF'; // Cyan
const accentColor2 = '#FF00FF'; // Magenta

export const LandingPage = styled.div`
  height: 100vh;
  width: 100%;
  background-color: black;
  color: white;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;
  padding: 2rem;
`;

export const Title = styled.h1`
  font-size: 6rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-shadow: 2px 2px ${accentColor1};
  
  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;

export const Tagline = styled.p`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: ${accentColor2};
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 50%;
  background-image: url('/images/background.jpeg');
  background-size: cover;
  background-position: center;
  clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%);
  opacity: 0.7;
  
  @media (max-width: 768px) {
    width: 100%;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    opacity: 0.3;
  }
`;

export const AnimatedText = styled.span`
  display: inline-block;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.5s forwards;
  animation-delay: ${props => props.delay}s;

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;