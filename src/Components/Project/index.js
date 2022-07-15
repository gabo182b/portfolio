import React from "react";
import { FaGithub, FaEye } from "react-icons/fa";
import { ProjectCard, ProjectImage, Image, ProjectInfo, ProjectTitle, ProjectDescription, ProjectLinks, LinkTag } from '../../styled-components/ProjectElements';

const Project = ({ img, title, description }) => {

  return (
    <ProjectCard>
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
