import React from "react";
import { Project } from "../Project";
import { projectOne } from "../Project/data";
import "./portfolio.scss";

const Portfolio = () => {
  return (
    <section className="portfolio-section" id="portfolio">
      <h2 className="portfolio-section__title">Projects</h2>
      <div className="portfolio-section__gallery">
        <Project className="portfolio-section__gallery-item" {...projectOne} />
      </div>
    </section>
  );
};

export { Portfolio };
