import styled from "styled-components";
import { colors, fontSizes } from "./variables";

export const LinkTag = styled.a`
    opacity: 0;
    //color: ${colors.white};
    color: ${colors.backgroundColor};
    transition: all 0.5s ease-in-out;
    font-size: ${fontSizes.sizeXl};

    &:hover {
    color: ${colors.backgroundColor};
    }
`

export const ProjectCard = styled.article`
    position: relative;
    border: 5px solid ${colors.white};
    overflow: hidden;
    cursor: pointer;
    background: rebeccapurple;
    border-radius: 5%;
    width: 30rem;
    height: 30rem;

    &:after {
            content: '';
            position: absolute;
            top: 100%;
            left: 0;
            height: 100%;
            width: 100%;
            background: ${colors.white};
            transition: all 0.5s ease-in-out
        }

    &:hover {
            &:after {
                top: 0;
                opacity: 0.9;
            }
            ${LinkTag} {
                opacity: 1;
            }
    }   
`

export const ProjectImage = styled.figure`
    
`

export const Image = styled.img`
    width: 100%; 
`

export const ProjectInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1rem 0 1rem 0;
    padding: 0;
    color:${colors.white};
`

export const ProjectTitle = styled.h1`
    font-size: ${fontSizes.sizeMd};
    margin: 0 0 0.5rem 0;
`

export const ProjectDescription = styled.p`
    font-size: ${fontSizes.sizeSm};
    text-align: justify;
    width: 80%;
`

export const ProjectLinks = styled.div`
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    text-align: center;
`