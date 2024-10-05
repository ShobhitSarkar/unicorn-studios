import React from 'react';
import { Container } from 'react-bootstrap';
import {
  PortfolioWrapper,
  PortfolioHeader,
  ProjectGrid,
  ProjectCard,
  ProjectFront,
  ProjectBack,
  ProjectTitle,
  ProjectDescription,
  ProjectLink,
  GlowingOrb
} from './Portfolio.styles';
import AnimatedSection from '../../Common/AnimatedSection';

const projects = [
  {
    id: 1,
    title: "AI Analytics Dashboard",
    description: "A cutting-edge dashboard leveraging machine learning for real-time business insights.",
    image: "https://placehold.co/600x400/001F3F/FFFFFF?text=AI+Dashboard",
    link: "#"
  },
  {
    id: 2,
    title: "Blockchain Supply Chain",
    description: "Revolutionizing supply chain management with transparent, immutable blockchain technology.",
    image: "https://placehold.co/600x400/0074D9/FFFFFF?text=Blockchain+Supply",
    link: "#"
  },
  {
    id: 3,
    title: "VR Training Simulator",
    description: "An immersive virtual reality platform for high-risk industry training scenarios.",
    image: "https://placehold.co/600x400/7FDBFF/000000?text=VR+Simulator",
    link: "#"
  }
];

const Portfolio = () => {
  return (
    <PortfolioWrapper>
      <GlowingOrb />
      <AnimatedSection>
        <Container>
          <PortfolioHeader>Portfolio</PortfolioHeader>
          <ProjectGrid>
            {projects.map((project) => (
              <ProjectCard key={project.id}>
                <ProjectFront style={{backgroundImage: `url(${project.image})`}} />
                <ProjectBack>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
                    Learn More
                  </ProjectLink>
                </ProjectBack>
              </ProjectCard>
            ))}
          </ProjectGrid>
        </Container>
      </AnimatedSection>
    </PortfolioWrapper>
  );
};

export default Portfolio;