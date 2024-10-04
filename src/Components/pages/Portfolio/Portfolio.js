import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import {
  PortfolioWrapper,
  PortfolioHeader,
  ProjectGrid,
  ProjectCard,
  ProjectImage,
  ProjectInfo,
  ProjectTitle,
  ProjectDescription,
  ProjectSummary,
  HoverEffect
} from './Portfolio.styles';

const projects = [
  {
    id: 1,
    title: "AI-Powered Solutions",
    summary: "Revolutionizing industries with artificial intelligence",
    description: "Our AI solutions include cutting-edge analytics dashboards, predictive maintenance systems, and automated decision-making tools that drive efficiency and innovation across various sectors.",
    image: "https://placehold.co/600x600/000000/00FFFF?text=AI+Solutions"
  },
  {
    id: 2,
    title: "Blockchain Technology",
    summary: "Secure, transparent, and decentralized systems",
    description: "We develop blockchain-based applications for supply chain management, secure voting systems, and decentralized finance, ensuring data integrity and trust in digital transactions.",
    image: "https://placehold.co/600x600/000000/FF00FF?text=Blockchain+Tech"
  },
  {
    id: 3,
    title: "XR Experiences",
    summary: "Immersive VR and AR applications",
    description: "Our extended reality (XR) experiences span from VR training simulators for high-risk industries to AR product visualization tools, pushing the boundaries of digital interaction and learning.",
    image: "https://placehold.co/600x600/000000/FFFF00?text=XR+Experiences"
  }
];

const Portfolio = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <PortfolioWrapper>
      <Container fluid>
        <PortfolioHeader>Our Futuristic Portfolio</PortfolioHeader>
        <ProjectGrid>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectInfo isHovered={hoveredProject === project.id}>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectSummary>{project.summary}</ProjectSummary>
                <ProjectDescription isHovered={hoveredProject === project.id}>
                  {project.description}
                </ProjectDescription>
              </ProjectInfo>
              <HoverEffect isHovered={hoveredProject === project.id} />
            </ProjectCard>
          ))}
        </ProjectGrid>
      </Container>
    </PortfolioWrapper>
  );
};

export default Portfolio;