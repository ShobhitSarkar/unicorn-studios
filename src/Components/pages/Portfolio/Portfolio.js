import React, { useState } from 'react';
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
  ProjectLink
} from './Portfolio.styles';

const projects = [
  {
    id: 1,
    title: "AI Analytics Dashboard",
    description: "A cutting-edge dashboard leveraging machine learning for real-time business insights.",
    image: "https://placehold.co/600x600/001F3F/FFFFFF?text=AI+Dashboard",
    link: "#"
  },
  {
    id: 2,
    title: "Blockchain Supply Chain",
    description: "Revolutionizing supply chain management with transparent, immutable blockchain technology.",
    image: "https://placehold.co/600x600/0074D9/FFFFFF?text=Blockchain+Supply",
    link: "#"
  },
  {
    id: 3,
    title: "VR Training Simulator",
    description: "An immersive virtual reality platform for high-risk industry training scenarios.",
    image: "https://placehold.co/600x600/7FDBFF/000000?text=VR+Simulator",
    link: "#"
  },
  {
    id: 4,
    title: "IoT Smart City",
    description: "Integrated IoT ecosystem for optimizing urban infrastructure and services.",
    image: "https://placehold.co/600x600/39CCCC/000000?text=IoT+City",
    link: "#"
  },
  {
    id: 5,
    title: "Quantum Encryption App",
    description: "Next-gen mobile app utilizing quantum algorithms for unbreakable communication.",
    image: "https://placehold.co/600x600/3D9970/FFFFFF?text=Quantum+App",
    link: "#"
  },
  {
    id: 6,
    title: "AR Product Visualizer",
    description: "Augmented reality tool for interactive 3D product demonstrations in e-commerce.",
    image: "https://placehold.co/600x600/2ECC40/000000?text=AR+Visualizer",
    link: "#"
  }
];

const Portfolio = () => {
  return (
    <PortfolioWrapper>
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
    </PortfolioWrapper>
  );
};

export default Portfolio;