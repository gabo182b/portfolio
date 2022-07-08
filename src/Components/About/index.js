import React from "react";
import { AboutContainer, AboutWrapper, AboutInfo, ResumeContainer, Resume } from "../../styled-components/AboutElements";


const About = () => {
  return (
    <AboutContainer id="about">
      <AboutWrapper>
        <AboutInfo>
          I am a frontend developer with a great creativity and attention
          to detail, I like teamwork to carry out faster and better problem
          solutions, always trying to have empathy and positivism.
          <br />
          <br />
          I am always looking forward to simplicity and the use of best practices
          always with an eager to continue learning and become a better developer.
          <br />
          <br />
          I have Knowledge about HTML, CSS javaScript, reactjs, SASS, Styled Components, nodejs, postgreSQL, expressjs, tailwindcss, antdesign.
          <br />
          <br />
          I also have interest in Music, Video Games, Computer hardware,
          sci-fi/fantasy books and movies.
        </AboutInfo>
        <ResumeContainer>
          <Resume href='https://www.linkedin.com/in/gabrielrojase/' target="_blank" >
            Resume
          </Resume>
        </ResumeContainer>
      </AboutWrapper>
    </AboutContainer>
  );
};

export { About };
