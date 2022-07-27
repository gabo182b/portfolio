import styled from "styled-components";
import { colors, fontSizes, device } from "./variables";


export const PortfolioContainer = styled.section`
    background: ${colors.secondaryColor};
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

export const PortfolioWrapper = styled.div`
    /* display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    //height: 53.75rem;
    height: 860px;
    width: 100%;
    max-width: 68.75rem;
    padding: 0 1.5rem;
    margin: auto; */
`

export const Gallery = styled.div`
    height: 100%;
    width: 60vw;
    margin: 40rem auto 50rem auto;
    padding: 10rem 0 3rem 0;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2rem;

    @media ${device.tablet} {
        grid-template-columns: repeat(2, 1fr);
    }

    @media ${device.laptop} {
        grid-template-columns: repeat(3, 1fr);
    }
`