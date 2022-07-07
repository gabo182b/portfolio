import React from "react";
import Video from '../../assets/video/galaxy.mp4';
import { HeroContainer, HeroBackground, VideoBackground, HeroContent, HeroTitle, HeroSubtitle, HeroImageContainer, HeroImage, Image } from '../../styled-components/HeroElements';
import image from '../../assets/images/gabriel.jpg';

const Hero = () => {
  return (
    <HeroContainer id='home'>
      <HeroBackground>
        <VideoBackground autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBackground>
      <HeroContent>
        <HeroTitle>Gabriel Rojas</HeroTitle>
        <HeroSubtitle>Developer</HeroSubtitle>
        <HeroImageContainer>
          <HeroImage>
            <Image src={image} alt='Gabriel Rojas' />
          </HeroImage>
        </HeroImageContainer>
      </HeroContent>
    </HeroContainer>
  );
};

export { Hero };
