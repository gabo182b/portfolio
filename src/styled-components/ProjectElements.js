import styled from "styled-components";
import { motion } from "framer-motion";
import { colors, fontSizes } from "./variables";

export const LinkTag = styled.a`
    opacity: 0;
    color: ${colors.secondaryColor};
    transition: all 0.5s ease-in-out;
    font-size: ${fontSizes.sizeXxl};
`

export const ProjectCard = styled(motion.article)`
    position: relative;
    width: 30rem;
    height: 30rem;
    border: 0.3rem solid ${colors.projectCardHover};
    overflow: hidden;
    border-radius: 5%;
    box-shadow: 5px 5px 16px 2px rgba(0,0,0,0.67);

    &:after {
            content: '';
            position: absolute;
            top: 100%;
            left: 0;
            height: 100%;
            width: 100%;
            background: ${colors.projectCardHover};
            transition: all 0.5s ease-in-out
        }

    &:hover {
            &:after {
                top: 0;
                opacity: 0.9;
            }
            ${LinkTag} {
                opacity: 1;
                color: ${colors.mainColor};
            }
    }   
`

export const ProjectImage = styled(motion.figure)`
    width: 100%;
    height: 50%;
    
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
`

export const ProjectInfo = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color:${colors.white};
`

export const ProjectTitle = styled.h1`
    font-size: ${fontSizes.sizeMd};
    margin: 2rem 0 0 0;
`

export const ProjectDescription = styled.p`
    font-size: ${fontSizes.sizeSmL};
    text-align: justify;
    margin: 2rem 0 0 0;
    width: 80%;
`

export const ProjectLinks = styled(motion.div)`
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