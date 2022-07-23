import styled from "styled-components";
import { colors, fontSizes } from "./variables";

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 6.5rem;
    background: ${colors.secondaryColor};;
    padding: 3rem 1.5rem 3rem 1.5rem;
    max-width: 68.75rem;
    margin: 0 auto 0 auto;
    color: #fff;
`
export const FooterList = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
`
export const FooterLink = styled.li`
    list-style: none;
    margin: 0 1rem 0 1rem;
`

export const Link = styled.a`
    text-decoration: none;
    font-size: ${fontSizes.sizeLg};
    color: ${colors.white};
`

export const FooterTextContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const FooterText = styled.p`
    font-size: ${fontSizes.sizeSm};
    margin: 0.5rem 0 0.5rem 0;
    text-align: center;
    
`