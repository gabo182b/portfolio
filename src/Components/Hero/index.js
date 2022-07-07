import React from "react";
import Video from '../../assets/video/galaxy.mp4';
import { HeroContainer, HeroBackground, VideoBackground, HeroContent, HeroTitle, HeroSubtitle, HeroImage, Image } from './HeroElements';
import image from '../../assets/images/gabriel.jpg';

const Hero = () => {
  return (
    <HeroContainer id='home'>
      <HeroBackground>
        <VideoBackground autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBackground>
      <HeroContent>
        <HeroTitle>Gabriel Rojas</HeroTitle>
        <HeroSubtitle>Frontend Developer</HeroSubtitle>
        <HeroImage>
          <Image src={image} alt='Gabriel Rojas' />
        </HeroImage>
      </HeroContent>
    </HeroContainer>
  );
};

export { Hero };
