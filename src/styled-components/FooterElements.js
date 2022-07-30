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
    
    @media ${device.desktop} {
        height: 8rem;
    }
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
    padding: 0;

    &:hover {
        filter: drop-shadow(0px 0px 4px rgb(255,255,255));        
    }

    
    
    @media ${device.desktop} {
        font-size: ${fontSizes.sizeXl};
    }

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

// export const LinkedInIcon = styled(FaLinkedin)`

//     &:hover {
        
//         filter: drop-shadow(0px 0px 4px rgb(255,255,255));        
//     }
// `
