import styled from "styled-components";
import { colors, fontSizes } from "./variables";


export const PortfolioContainer = styled.section`
    background: ${colors.backgroundColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const PortfolioWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    //height: 53.75rem;
    height: 860px;
    width: 100%;
    max-width: 68.75rem;
    padding: 0 1.5rem;
`

export const Gallery = styled.div`
    /* width: 100%;
    display: grid;
    padding: 1rem;
    grid-template-columns: 1fr;
    grid-gap: 2rem;
    justify-content: center; 
    align-items: center; */
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
`