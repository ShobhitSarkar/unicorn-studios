import styled, { keyframes } from 'styled-components';

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const orbFloat = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;

export const AboutSection = styled.section`
  background: #000;
  color: #F5F5F5;
  padding: 120px 0;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const AboutTitle = styled.h2`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
  background: linear-gradient(90deg, #D4AF37, #1C2F4A);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${gradientAnimation} 5s ease infinite;
  background-size: 200% 200%;
`;

export const AboutContent = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  text-align: center;
  margin-bottom: 4rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  color: #D3D3D3;
`;

export const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

export const FeatureItem = styled.div`
  background: #111111;
  border: 2px solid #D4AF37;
  border-radius: 10px;
  padding: 3rem 2rem;
  text-align: center;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(212, 175, 55, 0.2);
  }
`;

export const FeatureIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: #D4AF37;
`;

export const FeatureTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #F5F5F5;
`;

export const FeatureDescription = styled.p`
  font-size: 1.1rem;
  color: #D3D3D3;
`;

export const GlowingOrb = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.3) 0%, rgba(28, 47, 74, 0.3) 100%);
  filter: blur(50px);
  opacity: 0.5;
  top: -150px;
  right: -150px;
  animation: ${orbFloat} 10s ease-in-out infinite;
`;