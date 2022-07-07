import styled from "styled-components";

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
    max-width: 75rem;
    position: absolute;
    padding: 0.5rem 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeroTitle = styled.h1`
    color: #fff;
    font-size: 3rem;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 2.5rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const HeroSubtitle = styled.h2`
    color: #fff;
    font-size: 1.5rem;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 1.25rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 1rem;
    }
`;

export const HeroImage = styled.figure`
    width: 2rem;
    height: 2rem;
`;

export const Image = styled.img`
    width: 2rem;
    height: 2rem;

`