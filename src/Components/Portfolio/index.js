import React from "react";
import "./portfolio.scss";

const Portfolio = () => {
  return (
    <section className="portfolio-section" id="portfolio">
      <h2 className="portfolio-section__title">Projects</h2>
      <div className="portfolio-section__gallery">
        <div className="portfolio-section__gallery-item">1</div>
        <div className="portfolio-section__gallery-item">2</div>
        <div className="portfolio-section__gallery-item">3</div>
        <div className="portfolio-section__gallery-item">4</div>
        <div className="portfolio-section__gallery-item">5</div>
        <div className="portfolio-section__gallery-item">6</div>
        <div className="portfolio-section__gallery-item">7</div>
        <div className="portfolio-section__gallery-item">8</div>
      </div>
    </section>
  );
};

export { Portfolio };
