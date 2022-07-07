import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 5rem;
    background: rebeccapurple;
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
    font-size: 2rem;
    color: #fff;
`

export const FooterTextContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const FooterText = styled.p`
    text-align: center;
    
`