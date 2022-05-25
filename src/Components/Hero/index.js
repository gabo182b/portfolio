import React from "react";
import Video from "../../assets/video/bg.mp4";
import "./hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__bg">
        <video
          className="hero__bg-video"
          autoPlay
          loop
          muted
          src={Video}
          type="video/mp4"
        ></video>
      </div>
      <h1 className="hero__title">GABRIEL ROJAS</h1>
      <h2 className="hero__subtitle">Developer</h2>
      <img className="hero__image" alt="gabriel rojas" />
    </section>
  );
};

export { Hero };
