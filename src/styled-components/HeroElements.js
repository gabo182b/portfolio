import styled from "styled-components";
import { colors, fontSizes } from "./variables";

export const HeroContainer = styled.section`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1.875rem 0 1.875rem;
    //height: 55rem;
    height: 880px;
    position: relative;
    z-index: 1;
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
    margin-top: -10rem;
`;

export const HeroTitle = styled.h1`
    color: ${colors.white};
    font-size: ${fontSizes.sizeXl};
    text-align: center;
    margin: 0 0 5rem 0;

    /* @media screen and (max-width: 768px) {
        font-size: 2.5rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    } */
`;

export const HeroSubtitle = styled.h2`
    color: ${colors.white};
    font-size: ${fontSizes.sizeLg};
    text-align: center;
    margin: 0 0 5rem 0;

    /* @media screen and (max-width: 768px) {
        font-size: 1.25rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 1rem;
    } */
`;

export const HeroImageContainer = styled.div`
    border: 0.1rem ${colors.white} solid;
    border-radius: 50%;
    overflow: hidden;
`

export const HeroImage = styled.figure`

`;

export const Image = styled.img`
    width: 6rem;
    height: 6rem;

`