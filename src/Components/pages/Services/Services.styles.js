import styled, { keyframes } from 'styled-components';

export const ServicesSection = styled.section`
  background-color: #000000;
  color: #ffffff;
  padding: 120px 0;
  min-height: 100vh;
`;

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
// export const ServiceTitle = styled.h2`
//   font-size: 3.5rem;
//   margin-bottom: 1.5rem;
//   text-align: center;
//   color: #ffffff;
// `;

export const ServiceTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(90deg, #00FFFF, #FF00FF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${gradientAnimation} 5s ease infinite;
  background-size: 200% 200%;
`;

export const ServiceSubtitle = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 4rem;
  text-align: center;
  color: #cccccc;
`;

export const ServiceCard = styled.div`
  background: #111111;
  border-radius: 10px;
  padding: 3rem 2rem;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(255, 255, 255, 0.1);
  }
`;

export const ServiceIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: #ffffff;
`;

export const ServiceName = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #ffffff;
`;

export const ServiceDescription = styled.p`
  font-size: 1.1rem;
  color: #cccccc;
  margin-bottom: 2rem;
`;

export const LearnMoreButton = styled.button`
  background: #ffffff;
  border: none;
  border-radius: 25px;
  color: #000000;
  font-weight: bold;
  padding: 12px 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  
  &:hover {
    background: #cccccc;
    transform: scale(1.05);
  }
`;