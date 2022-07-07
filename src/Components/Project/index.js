import React from "react";
import { ProjectCard, ProjectImage, Image, ProjectTitle, ProjectDescription, ProjectLinks } from './ProjectElements';

const Project = ({ img, title, description }) => {

  return (
    <ProjectCard>
      <ProjectImage>
        <Image src={img} />
      </ProjectImage>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectDescription>{description}</ProjectDescription>
      {/* <ProjectLinks></ProjectLinks> */}
    </ProjectCard>
  );
};

export { Project };
