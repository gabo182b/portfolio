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
        <HeroTitle
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{
            duration: 0.6,
            ease: 'easeInOut',
            delay: 0.5,
            type: 'spring'
          }}
        >
          Gabriel Rojas
        </HeroTitle>
        <HeroSubtitle
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{
            duration: 0.8,
            ease: 'easeInOut',
            delay: 0.7,
            type: 'spring'
          }}
        >
          Developer
        </HeroSubtitle>
        <HeroImageContainer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 2.5
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
