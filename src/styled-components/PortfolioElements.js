import styled from "styled-components";
import { colors, fontSizes } from "./variables";


export const PortfolioContainer = styled.section`
    background: ${colors.backgroundColor};
`

export const PortfolioWrapper = styled.div`
    z-index: 1;
    //height: 53.75rem;
    height: 860px;
    width: 100%;
    max-width: 68.75rem;
    padding: 0 1.5rem;
    margin: auto;
`

export const Gallery = styled.div`
    padding-top: 25rem;
    display: grid;
    justify-items: center;
    gap: 1rem;
    grid-auto-rows: 30rem;
    //grid-template-columns: repeat(auto-fill, minmax(min(100%, 25rem), 1fr));
    
`