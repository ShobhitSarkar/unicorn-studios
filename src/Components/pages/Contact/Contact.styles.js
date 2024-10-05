import styled, { keyframes } from 'styled-components';

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const ContactSection = styled.section`
  background-color: #000000;
  color: #F5F5F5;
  padding: 120px 0;
  min-height: 100vh;
`;

export const ContactTitle = styled.h2`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
  background: linear-gradient(90deg, #D4AF37, #1C2F4A);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${gradientAnimation} 5s ease infinite;
  background-size: 200% 200%;
`;

export const ContactSubtitle = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 4rem;
  text-align: center;
  color: #D3D3D3;
`;

export const CalendlyWrapper = styled.div`
  background: rgba(28, 47, 74, 0.1);
  border-radius: 10px;
  padding: 20px;
  height: 100%;
  box-shadow: 0 4px 6px rgba(212, 175, 55, 0.1);
`;

export const ContactInfo = styled.div`
  background: rgba(28, 47, 74, 0.1);
  border-radius: 10px;
  padding: 40px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 6px rgba(212, 175, 55, 0.1);
`;

export const ConnectTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #F5F5F5;
`;

export const ContactCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  width: 100%;
`;

export const ContactCard = styled.div`
  background: rgba(28, 47, 74, 0.2);
  border: 2px solid #D4AF37;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(212, 175, 55, 0.2);
  }
`;

export const ContactIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 15px;
  color: #D4AF37;
`;

export const ContactLink = styled.a`
  color: #F5F5F5;
  text-decoration: none;
  font-size: 1.2rem;
  text-align: center;
  transition: color 0.3s ease;

  &:hover {
    color: #D4AF37;
  }
`;