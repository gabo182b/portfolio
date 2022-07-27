import React from "react";
import { Project } from "../Project/index";
import { projectOne } from "../Project/data";
import { PortfolioContainer, PortfolioWrapper, Gallery } from "../../styled-components/PortfolioElements";

const Portfolio = () => {
  return (
    <PortfolioContainer id="portfolio">
      <Gallery>
        <Project {...projectOne} />
        <Project {...projectOne} />
      </Gallery>
    </PortfolioContainer>
  );
};

export { Portfolio };
