import styled from "styled-components";
import { motion } from "framer-motion";
import { colors, fontSizes, device } from "./variables";

export const HeroContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 880px;
    position: relative;
    z-index: 1;

    @media ${device.tablet} {
        height: 1180px;
    }
`;

export const HeroBackground = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const VideoBackground = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;

export const HeroContent = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center; 
    position: absolute;
    margin: -4rem 0 0 0;

    @media ${device.xlScreen} {
        margin-top: -20rem;
    }
`;

export const HeroTitle = styled(motion.h1)`
    color: ${colors.white};
    font-size: ${fontSizes.sizeXl};
    text-align: center;
    margin: 0 0 0 0;

    @media ${device.xlScreen} {
        font-size: ${fontSizes.sizeXxl};    
    }
`;

export const HeroSubtitle = styled(motion.h2)`
    color: ${colors.white};
    font-size: ${fontSizes.sizeLg};
    text-align: center;
    margin: 5rem 0 0 0;

    @media ${device.xlScreen} {
        font-size: ${fontSizes.sizeXxl};    
    }
`;

export const HeroImageContainer = styled(motion.div)`
    border: 0.1rem ${colors.white} solid;
    border-radius: 50%;
    overflow: hidden;
    margin: 7rem 0 0 0;
`

export const HeroImage = styled.figure`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 13rem;
    height: 13rem;
    
`;

export const Image = styled.img`
    width: 15rem;
    height: 17rem;
    margin: 4.1rem 0 0 0;
`