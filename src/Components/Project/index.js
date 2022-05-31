import React from "react";
import "./project.scss";
const Project = (props) => {
  const { img, title, description } = props;

  return (
    <article className="card">
      <div className="card__image">
        <img src={img} alt="project" />
      </div>
      <h3 className="card_title">{title}</h3>
      <p className="card_description">{description}</p>
      <div className="card__links"></div>
    </article>
  );
};

export { Project };
