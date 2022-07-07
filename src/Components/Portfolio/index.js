import React from "react";
import { Project } from "../Project/index";
import { projectOne } from "../Project/data";
import { PortfolioContainer, PortfolioWrapper, Gallery } from "../../styled-components/PortfolioElements";

const Portfolio = () => {
  return (
    <PortfolioContainer id="portfolio">
      <PortfolioWrapper>
        <Gallery>
          <Project {...projectOne} />
        </Gallery>
      </PortfolioWrapper>
    </PortfolioContainer>
  );
};

export { Portfolio };
