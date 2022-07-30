import React from "react";
import Video from '../../assets/video/galaxy.mp4';
import { HeroContainer, HeroBackground, VideoBackground, HeroContent, HeroTitle, HeroSubtitle, HeroImageContainer, HeroImage, Image } from '../../styled-components/HeroElements';
import image from '../../assets/images/gabriel.jpg';
import { type } from "@testing-library/user-event/dist/type";

const Hero = () => {
  return (
    <HeroContainer id='home'>
      <HeroBackground>
        <VideoBackground autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBackground>
      <HeroContent>
        <HeroTitle
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            ease: 'easeInOut',
            type: 'spring',
            stiffness: 120
          }}
        >
          Gabriel Rojas
        </HeroTitle>
        <HeroSubtitle
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.5,
            ease: 'easeInOut',
            type: 'spring',
            stiffness: 120
          }}
        >
          Developer
        </HeroSubtitle>
        <HeroImageContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.5,
            type: 'tween',
            duration: 1
          }}
        >
          <HeroImage>
            <Image src={image} alt='Gabriel Rojas' />
          </HeroImage>
        </HeroImageContainer>
      </HeroContent>
    </HeroContainer>
  );
};

export { Hero };
