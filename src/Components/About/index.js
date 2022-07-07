import React from "react";
import { AboutContainer, AboutWrapper, AboutInfo } from "../../styled-components/AboutElements";


const About = () => {
  return (
    <AboutContainer id="about">
      <AboutWrapper>
        <AboutInfo>
          I am a frontend junior developer with a great creativity and attention
          to detail, I like teamwork to carry out faster and better problem
          solutions, akways trying to have empathy and positivism.
          <br />
          <br />
          I am alwayslooking forward to simplicity and the use of best practices
          always with an eager to continue leraning and become a better developer.
          <br />
          <br />
          I have Knowledge about HTML, CSS javaScript, reactjs, SASS, nodejs,
          postgreSQL, expressjs, tailwindcss, antdesign.
          <br />
          <br />I also have interest in Music, Video Games, Computer hardware,
          sci-fi/fantasy books and movies.
        </AboutInfo>
      </AboutWrapper>
    </AboutContainer>
  );
};

export { About };
