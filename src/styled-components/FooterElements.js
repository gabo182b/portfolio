import styled from "styled-components";
import { colors, fontSizes, device } from "./variables";

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 6.5rem;
    background: ${colors.secondaryColor};
    padding: 3rem 1.5rem 3.5rem 1.5rem;
    margin: 0 auto 0 auto;
    color: ${colors.buttonText};
    
    @media ${device.xlScreen} {
        height: 8rem;
    }
`

export const FooterList = styled.ul`
    display: flex;
    flex-direction: row;
`

export const FooterLink = styled.li`
    list-style: none;
    margin: 0 1.5rem 0 1.5rem;
`

export const Link = styled.a`
    text-decoration: none;
    font-size: ${fontSizes.sizeXl};
    color: ${colors.white};

    &:hover {
        filter: drop-shadow(0px 0px 4px rgb(255,255,255));        
    }

    @media ${device.xlScreen} {
        font-size: ${fontSizes.sizeXl};
    }
`

export const FooterTextContainer = styled.div`
  
`

export const FooterText = styled.p`
    font-size: ${fontSizes.sizeSm};
    text-align: center;
`