import styled from "styled-components";
import { colors, fontSizes } from "./variables";

export const AboutContainer = styled.section`
    background: ${colors.mainColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 880px;
    z-index: 1;

    /* @media screen and (max-width: 768px){
        padding: 0;
    } */
`

export const AboutWrapper = styled.div`
    /* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;
    //height: 53.75rem;
    height: 860px;
    width: 100%;
    max-width: 68.75rem;
    padding: 0 2rem 0 2rem; */

`

export const AboutInfo = styled.p`
    color: ${colors.white} ;
    text-align: justify;
    width: 30rem;
    font-size: ${fontSizes.sizeMd};
`

export const ResumeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 5rem 0 0 0;
`

export const Resume = styled.a`
    color: ${colors.white} ;
    text-decoration: none;
    text-align: center;
    font-size: ${fontSizes.sizeMd};
`