import React from "react";
import { FaGithub, FaEye } from "react-icons/fa";
import { ProjectCard, ProjectImage, Image, ProjectInfo, ProjectTitle, ProjectDescription, ProjectLinks, LinkTag } from '../../styled-components/ProjectElements';

const cardVariants = {
  initial: {
    x: '-100vw'
  },
  animate: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 150,
      delay: 0.5
    }
  },
}

const Project = ({ img, title, description }) => {
  return (
    <ProjectCard
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover={{ rotate: 360 }}
    >
      <ProjectImage>
        <Image src={img} alt='project-image' />
      </ProjectImage>
      <ProjectInfo>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
      </ProjectInfo>
      <ProjectLinks>
        <LinkTag href='/' target="_blank">
          <FaEye />
        </LinkTag>
        <LinkTag href='/' target="_blank" aria-label="Github">
          <FaGithub />
        </LinkTag>
      </ProjectLinks>
    </ProjectCard>
  );
};

export { Project };
