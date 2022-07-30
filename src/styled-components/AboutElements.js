import styled from "styled-components";
import { motion } from "framer-motion";
import { colors, fontSizes, device } from "./variables";

export const AboutContainer = styled.section`
    background: ${colors.mainColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 880px;
    z-index: 1;

    @media ${device.tablet} {
        height: 1180px;
    }
`

export const AboutInfo = styled(motion.p)`
    color: ${colors.white} ;
    text-align: justify;
    width: 30rem;
    font-size: ${fontSizes.sizeMd};
    
    @media ${device.tablet} {
        width: 70rem;
        font-size: ${fontSizes.sizeMdLg};
        line-height: 4rem;
    }

    @media ${device.desktop} {
        width: 85rem;
        font-size: ${fontSizes.sizeMdLg};
        line-height: 4.5rem;
        margin-top: -20rem;
    }
`

export const ResumeContainer = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 5rem 0 0 0;
    border: 0.1rem solid ${colors.white} ;
    padding: 1.5rem;
    border-radius: 10%;

    @media ${device.tablet} {
        position: absolute;
        margin-top: 90rem;
    }

    @media ${device.desktop} {
        position: absolute;
        margin-top: 57rem;
    }
`

export const Resume = styled.a`
    color: ${colors.white} ;
    text-decoration: none;
    text-align: center;
    font-size: ${fontSizes.sizeMd};

    @media ${device.tablet} {
        width: 70rem;
        font-size: ${fontSizes.sizeMdLg};
        line-height: 4rem;
    }
`