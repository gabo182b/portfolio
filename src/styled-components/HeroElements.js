import styled from "styled-components";
import { colors, fontSizes, device } from "./variables";

export const HeroContainer = styled.section`
    //background: #0c0c0c;
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
    margin-top: -10rem;

    @media ${device.desktop} {
        margin-top: -20rem;
    }
`;

export const HeroTitle = styled.h1`
    color: ${colors.white};
    font-size: ${fontSizes.sizeXl};
    text-align: center;
    margin: 0 0 5rem 0;

    @media ${device.desktop} {
        font-size: ${fontSizes.sizeXxl};    
    }
`;

export const HeroSubtitle = styled.h2`
    color: ${colors.white};
    font-size: ${fontSizes.sizeLg};
    text-align: center;
    margin: 0 0 5rem 0;

    @media ${device.desktop} {
        font-size: ${fontSizes.sizeXxl};    
    }
`;

export const HeroImageContainer = styled.div`
    border: 0.1rem ${colors.white} solid;
    border-radius: 50%;
    overflow: hidden;
    margin: 8rem 0 0 0;
`

export const HeroImage = styled.figure`
    
`;

export const Image = styled.img`
    width: 10rem;
    height: 10rem;

`